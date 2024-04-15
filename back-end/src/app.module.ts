import { Module } from '@nestjs/common';
import { NotificationModule } from './modules/notification/notification.module';

@Module({
  imports: [NotificationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
