import { Module } from '@nestjs/common';
import { DateTimeUtils } from './providers/date-time';
import { Utils } from './providers/utils';

@Module({
  imports: [],
  controllers: [],
  providers: [Utils, DateTimeUtils],
  exports: [Utils, DateTimeUtils],
})
export class UtilsModule {}
