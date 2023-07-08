import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
 */
@Pipe({ name: 'dateCustom' })
export class DateCustomPipe extends DatePipe {
  // inplement this method
  override transform(
    value: any,
    format?: any,
    timezone?: any,
    locale?: any
  ): any {
    return super.transform(value, 'mm/dd/yy', timezone, locale);
  }
}
