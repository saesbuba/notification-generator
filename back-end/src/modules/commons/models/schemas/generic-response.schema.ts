import { HttpStatus } from '@nestjs/common';

export interface GenericHttpResponse<T> {
  success: boolean;
  statusCode: HttpStatus;
  message?: string;
  defaults?: string;
  records: Array<T> | T;
}
