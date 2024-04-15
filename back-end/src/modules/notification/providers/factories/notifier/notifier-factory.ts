import { Injectable } from '@nestjs/common';
import { Notifier } from './notifier';
import { EmailNotifier } from './email-notifier';
import { SmsNotifier } from './sms-notifier';
import { PushNotificationNotifier } from './push-notification-notifier';
import { Channels } from '../../../model/channels-enum';

@Injectable()
export class NotifierFactory {
  constructor(
    private emailNotifier: EmailNotifier,
    private smsNotifier: SmsNotifier,
    private pushNotifier: PushNotificationNotifier,
  ) {}

  createNotifier(channel: Channels): Notifier {
    switch (Channels[channel]) {
      case Channels.email:
        return this.emailNotifier;
      case Channels.push:
        return this.pushNotifier;
      case Channels.sms:
        return this.smsNotifier;
      default:
        throw new Error('Invalid notifier');
    }
  }
}
