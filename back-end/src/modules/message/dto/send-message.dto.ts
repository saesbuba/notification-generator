import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

import { Categories } from '../model/category.enum';

export class SendMessageDto {
  @IsString()
  @IsNotEmpty()
  @IsEnum(Categories)
  category: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
