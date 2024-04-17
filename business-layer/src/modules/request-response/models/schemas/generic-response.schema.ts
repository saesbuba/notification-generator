import { HttpStatus } from '@nestjs/common';

export interface HttpRequestResponse<T> {
  success: boolean;
  statusCode: HttpStatus;
  message?: string;
  defaults?: string;
  records: Array<T> | T;
}
