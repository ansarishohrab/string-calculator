import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StringCalculatorService {
  constructor() {}
  add(numbers: string): number {
    if (!numbers.trim()) {
      return 0;
    }
    return numbers
      .replace(/\n/g, ',') // replace new lines with commas
      .split(',')
      .map((num) => parseInt(num.trim(), 10) || 0)
      .reduce((sum, num) => sum + num, 0);
  }
}
