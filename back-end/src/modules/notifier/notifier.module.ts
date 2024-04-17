import { Module } from '@nestjs/common';
import { UtilsModule } from '../utils/utils.module';
import { NotifierFactory } from './notifier-factory';
import { EmailNotifier } from './email-notifier';
import { SmsNotifier } from './sms-notifier';
import { PushNotificationNotifier } from './push-notification-notifier';

@Module({
  imports: [UtilsModule],
  controllers: [],
  providers: [
    NotifierFactory,
    EmailNotifier,
    SmsNotifier,
    PushNotificationNotifier,
  ],
  exports: [
    NotifierFactory,
    EmailNotifier,
    SmsNotifier,
    PushNotificationNotifier,
  ],
})
export class NotifierModule {}
