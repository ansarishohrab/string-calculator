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
    let delimiter = /,|\n/; // Default delimiter comma and newline

    const customDelimiterMatch = numbers.match(/^\/\/(.+)\n(.*)/);
    if (customDelimiterMatch) {
      const rawDelimiter = customDelimiterMatch[1];
      const excapedDelimiter = rawDelimiter.replace(
        /[-\/\\^$*+?.()|[\]{}]/g,
        '\\$&'
      );
      delimiter = new RegExp(excapedDelimiter);
      numbers = customDelimiterMatch[2];
    }

    return numbers
      .split(delimiter)
      .map((num) => parseInt(num.trim(), 10) || 0)
      .reduce((sum, num) => sum + num, 0);
  }
}
