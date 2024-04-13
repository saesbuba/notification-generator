import { Module } from '@nestjs/common';
import { NotificationModule } from '../notification/notification.module';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { NotificationService } from '../notification/notification.service';

@Module({
  imports: [NotificationModule],
  controllers: [MessageController],
  providers: [MessageService, NotificationService],
  exports: [],
})
export class MessageModule {}
