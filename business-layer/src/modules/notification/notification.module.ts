import { Module } from '@nestjs/common';
import { NotifierModule } from '../notifier/notifier.module';
import { UserModule } from '../user/user.module';
import { LogModule } from '../log/log.module';
import { UtilsModule } from '../utils/utils.module';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';

@Module({
  imports: [NotifierModule, UserModule, LogModule, UtilsModule],
  controllers: [NotificationController],
  providers: [NotificationService],
})
export class NotificationModule {}
