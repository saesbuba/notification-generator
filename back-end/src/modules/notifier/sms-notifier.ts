import { Injectable } from '@nestjs/common';
import { Notifier } from './notifier';
import { NotifierConfiguration } from '../notification/model/schemas/configuration.schema';
import { Notification } from '../notification/model/schemas/notification.schema';

import { Utils } from '../utils/providers/utils';
import { DateTimeUtils } from '../utils/providers/date-time';

import { Channels } from '../notification/model/channels-enum';

@Injectable()
export class SmsNotifier implements Notifier {
  constructor(
    private generalUtils: Utils,
    private dateTimeUtils: DateTimeUtils,
  ) {}

  private channel = Channels.sms;

  send(configuration: NotifierConfiguration): Promise<Notification> {
    const { name, phoneNumber } = configuration.subscriber;
    return Promise.resolve({
      id: this.generalUtils.generateId(),
      subscriber: configuration.subscriber,
      typeOfMessage: configuration.category,
      typeOfNotification: this.channel,
      successfulDelivery: true,
      thirdPartyResponse: 'The notification has been received successfully.',
      details: `The notification was successfully sent to ${name} to the phone number ${phoneNumber}`,
      creationDate: this.dateTimeUtils.getCurrentDate(),
      creationTime: this.dateTimeUtils.getCurrentTime(),
    });
  }
}
