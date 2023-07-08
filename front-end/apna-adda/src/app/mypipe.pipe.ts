import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
 */
@Pipe({ name: 'exponentialStrength' })
export class ExponentialStrengthPipe implements PipeTransform {
  constructor() {}
  // inplement this method
  transform(value: number, exponent1: string, exponent2: string): number {
    let exp = parseFloat(exponent1);
    return Math.pow(value, isNaN(exp) ? 1 : exp);
  }
}
