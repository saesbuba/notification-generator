import { Injectable } from '@nestjs/common';
import { SendMessageDto } from './dto/send-message.dto';
import { NotificationService } from '../notification/notification.service';

@Injectable()
export class MessageService {
  constructor(private notificationService: NotificationService) {}

  async send(sendMessageDto: SendMessageDto) {
    const { category } = sendMessageDto;

    await this.notificationService.send(category);

    return 'The message was received correctly';
  }
}
