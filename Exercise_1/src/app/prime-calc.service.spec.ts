import { TestBed } from '@angular/core/testing';

import { PrimeCalcService } from './prime-calc.service';

describe('PrimeCalcService', () => {
  let service: PrimeCalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrimeCalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
