import { MessageService } from './message.service';
import { SendMessageDto } from './dto/send-message.dto';
export declare class MessageController {
    private readonly messageService;
    constructor(messageService: MessageService);
    create(sendMessageDto: SendMessageDto): string;
}
