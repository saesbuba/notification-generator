import { Controller, Get, Post, Body } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { SendNotificationDto } from './dto/send-notification.dto';
import { Categories } from './model/categories.enum';

@Controller('notification')
export class NotificationController {
  constructor(private notificationService: NotificationService) {}

  @Get()
  getNotifications() {
    return this.notificationService.getNotifications();
  }

  @Post()
  sendNotifications(@Body() sendNotificationDto: SendNotificationDto) {
    const { category } = sendNotificationDto;
    return this.notificationService.sendNotifications(Categories[category]);
  }
}
