import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { UserService } from '../user/user.service';
import { NotifierFactory } from './providers/factories/notifier/notifier-factory';
import { EmailNotifier } from './providers/factories/notifier/email-notifier';
import { SmsNotifier } from './providers/factories/notifier/sms-notifier';
import { PushNotificationNotifier } from './providers/factories/notifier/push-notification-notifier';
import { LogService } from '../log/log.service';
import { NotificationController } from './notification.controller';

@Module({
  imports: [],
  controllers: [NotificationController],
  providers: [
    NotificationService,
    UserService,
    NotifierFactory,
    EmailNotifier,
    SmsNotifier,
    PushNotificationNotifier,
    LogService,
  ],
  exports: [UserService, NotifierFactory],
})
export class NotificationModule {}
