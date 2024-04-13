import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { UserService } from '../user/user.service';

@Module({
  controllers: [],
  providers: [MessageService, UserService],
})
export class MessageModule {}
