import { Injectable } from '@nestjs/common';

@Injectable()
export class Utils {
  generateId() {
    const random = Math.random().toString(36).substring(2);
    const date = Date.now().toString(36);
    return random + date;
  }
}
