import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { UserService } from '../user/user.service';
import { NotifierFactory } from './providers/factories/notifier/notifier-factory';
import { EmailNotifier } from './providers/factories/notifier/email-notifier';
import { SmsNotifier } from './providers/factories/notifier/sms-notifier';
import { PushNotificationNotifier } from './providers/factories/notifier/push-notification-notifier';
import { LogService } from '../log/log.service';
import { NotificationController } from './notification.controller';
import { UtilsModule } from '../utils/utils.module';
import { DateTimeUtils } from '../utils/providers/date-time';
import { GeneralUtils } from '../utils/providers/general';

@Module({
  imports: [UtilsModule],
  controllers: [NotificationController],
  providers: [
    NotificationService,
    UserService,
    NotifierFactory,
    EmailNotifier,
    SmsNotifier,
    PushNotificationNotifier,
    LogService,
    GeneralUtils,
    DateTimeUtils,
  ],
  exports: [],
})
export class NotificationModule {}
