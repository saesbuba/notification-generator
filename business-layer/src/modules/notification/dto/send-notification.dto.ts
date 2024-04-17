import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

import { Categories } from '../model/categories.enum';

export class SendNotificationDto {
  @IsString()
  @IsNotEmpty()
  @IsEnum(Categories)
  category: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
