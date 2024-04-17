import { Injectable, Scope } from '@nestjs/common';
import { formatInTimeZone } from 'date-fns-tz';

@Injectable({ scope: Scope.REQUEST })
export class DateTimeUtils {
  private currentDateTime = new Date();

  getCurrentDate(): string {
    return formatInTimeZone(
      this.currentDateTime,
      'America/Denver',
      'yyyy-MM-dd',
    );
  }
  getCurrentTime(): string {
    return formatInTimeZone(this.currentDateTime, 'America/Denver', 'HH:mm:ss');
  }
}
