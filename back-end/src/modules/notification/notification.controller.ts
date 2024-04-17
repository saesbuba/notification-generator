import { Controller, Get, Post, Body } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { SendNotificationDto } from './dto/send-notification.dto';
import { Categories } from './model/categories.enum';

@Controller('notification')
export class NotificationController {
  constructor(private notificationService: NotificationService) {}

  @Get()
  async getNotifications() {
    return await this.notificationService.getNotifications();
  }

  @Post()
  async sendNotifications(@Body() sendNotificationDto: SendNotificationDto) {
    const { category } = sendNotificationDto;
    return await this.notificationService.sendNotifications(
      Categories[category],
    );
  }
}
