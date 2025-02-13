import { TestBed } from '@angular/core/testing';

import { StringCalculatorService } from './string-calculator.service';

describe('StringCalculatorService', () => {
  let service: StringCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 0 for an empty string', () => {
    expect(service.add('')).toEqual(0);
  });

  it('should return the number itself when only one number is provided', () => {
    expect(service.add('5')).toEqual(5);
  });

  it('should return the sum of two comma-separated numbers', () => {
    expect(service.add('1,2')).toEqual(3);
  });

  it('should return the sum of multiple comma-separated numbers', () => {
    expect(service.add('1,2,3,4,5')).toEqual(15);
  });
});
