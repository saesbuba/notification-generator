import { Controller, Post, Body } from '@nestjs/common';
import { MessageService } from './message.service';
import { SendMessageDto } from './dto/send-message.dto';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  create(@Body() sendMessageDto: SendMessageDto) {
    return this.messageService.send(sendMessageDto);
  }
}
