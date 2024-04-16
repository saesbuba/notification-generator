import { Module } from '@nestjs/common';
import { DateTimeUtils } from './providers/date-time';
import { GeneralUtils } from './providers/general';

@Module({
  imports: [],
  controllers: [],
  providers: [GeneralUtils, DateTimeUtils],
  exports: [GeneralUtils, DateTimeUtils],
})
export class UtilsModule {}
