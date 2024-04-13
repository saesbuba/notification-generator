import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { NotifierFactory } from './providers/factories/notifier/notifier-factory';
import { Channels } from './model/channel-enum';

@Injectable()
export class NotificationService {
  constructor(
    private userService: UserService,
    private notifierFactory: NotifierFactory,
  ) {}

  async send(category): Promise<string> {
    const users =
      await this.userService.findAllBySubscriptionCategory(category);

    for (const user of users) {
      const notifierInstances = user.channels.map((channel) =>
        this.notifierFactory.createNotifier(Channels[channel]),
      );

      const notificationSenders = notifierInstances.map((notifier) =>
        notifier.send({ subscriber: user }),
      );

      Promise.allSettled(notificationSenders);
    }

    return 'Notifications were sent to subscribers';
  }
}
