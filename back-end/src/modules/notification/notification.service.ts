import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationService {
  create() {
    return 'This action adds a new notification';
  }
}
