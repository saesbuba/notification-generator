import { Injectable } from '@nestjs/common';
import { Notifier } from './notifier';
import { NotifierConfiguration } from '../../../model/configuration.schema';
import { Notification } from '../../../model/schemas/notification.schema';

import { Channels } from 'src/modules/notification/model/channels-enum';

@Injectable()
export class EmailNotifier implements Notifier {
  private channel = Channels.email;

  async send(configuration: NotifierConfiguration): Promise<Notification> {
    const { name, email } = configuration.subscriber;
    return Promise.resolve({
      subscriber: configuration.subscriber,
      typeOfMessage: configuration.category,
      typeOfNotification: this.channel,
      successfulDelivery: true,
      thirdPartyResponse: 'The notification has been received successfully.',
      details: `The notification was successfully sent to ${name} to the ${email} email address`,
    });
  }
}
