import { Injectable } from '@angular/core';
import { CurrencyModel } from '../_models/currency.model';

@Injectable({
  providedIn: 'root'
})
export class CurrencyStorageService {
  BTC: CurrencyModel[];
  LSK: CurrencyModel[];
  ETH: CurrencyModel[];
  constructor() { }
}
