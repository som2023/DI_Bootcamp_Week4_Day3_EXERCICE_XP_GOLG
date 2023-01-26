import { Injectable } from '@angular/core';
import { primeCalc } from './primeCalc';

@Injectable({
  providedIn: 'root'
})
export class PrimeCalcService {

  get() {
    return primeCalc;
  }
}
