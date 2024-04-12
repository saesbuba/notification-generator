import { Injectable } from '@nestjs/common';
import { SendMessageDto } from './dto/send-message.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class MessageService {
  constructor(private userService: UserService) {}

  send(sendMessageDto: SendMessageDto) {
    this.userService.findAllBySubscriptionCategory('finance');
    const users = [
      {
        id: 73838,
        name: 'Rapahael',
        email: '',
        phoneNumber: '',
        suscribed: ['sports', 'finance'],
        channels: ['sms', 'e-mail', 'movies'],
      },
    ];

    console.log(sendMessageDto);
    return 'This action adds a new message';
  }
}
