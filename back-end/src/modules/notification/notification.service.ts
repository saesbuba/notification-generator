import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';

import { GenericHttpResponse } from '../commons/models/schemas/generic-response.schema';
import { UserService } from '../user/user.service';
import { NotifierFactory } from './providers/factories/notifier/notifier-factory';
import { LogService } from '../log/log.service';

import { Notification } from './model/schemas/notification.schema';

import { Channels } from './model/channels-enum';
import { Categories } from './model/categories.enum';

@Injectable()
export class NotificationService {
  private genericResponse: GenericHttpResponse<undefined> = {
    success: true,
    statusCode: 200,
    records: [],
  };

  constructor(
    private userService: UserService,
    private notifierFactory: NotifierFactory,
    private logService: LogService,
  ) {}

  async getNotifications(): Promise<GenericHttpResponse<Notification>> {
    const notifications = await this.logService.findAll().catch((error) => {
      throw new InternalServerErrorException({
        ...this.genericResponse,
        success: false,
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        details: error.message,
        message: 'Was an error when trying to get notifications',
      });
    });

    if (notifications.length === 0) {
      return {
        ...this.genericResponse,
        message: 'No records found',
        statusCode: HttpStatus.NO_CONTENT,
      };
    }

    return {
      ...this.genericResponse,
      records: notifications,
    };
  }
  async sendNotifications(
    category: Channels,
  ): Promise<GenericHttpResponse<Notification>> {
    const notificationResults: Array<Notification> = [];

    const users = await this.userService
      .findAllBySubscriptionCategory(Categories[category])
      .catch((error) => {
        throw new InternalServerErrorException({
          ...this.genericResponse,
          success: false,
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          details: error.message,
          message: 'Was an error when trying to get users, please advise',
        });
      });

    for (const user of users) {
      const { subscriptions, channels, ...onlyUser } = user;
      const notifierInstances = user.channels.map((channel) =>
        this.notifierFactory.createNotifier(Channels[channel]),
      );

      const notificationSenders = notifierInstances.map((notifier) =>
        notifier.send({
          subscriber: onlyUser,
          category: Categories[category],
        }),
      );

      const promiseResults = await Promise.allSettled(notificationSenders);

      promiseResults.forEach((promiseResult) =>
        //@ts-ignore
        notificationResults.push(promiseResult.value),
      );
    }

    await this.logService.write(notificationResults);

    return {
      ...this.genericResponse,
      statusCode: HttpStatus.CREATED,
      records: notificationResults,
    };
  }
}
