import { Injectable } from '@nestjs/common';

@Injectable()
export class LogService {
  create() {
    console.log('This action adds a new log');
  }

  findAll() {
    return `This action returns all log`;
  }
}
