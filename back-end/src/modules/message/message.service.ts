import { Injectable } from '@nestjs/common';
import { SendMessageDto } from './dto/send-message.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class MessageService {
  constructor(private userService: UserService) {}

  async send(sendMessageDto: SendMessageDto) {
    const {category, description} = sendMessageDto
    const users = await this.userService.findAllBySubscriptionCategory(category);

    console.log(users)
    return 'This action adds a new message';
  }
}
