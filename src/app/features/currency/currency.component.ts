import { CurrencyStorageService } from './../../_services/currency-storage.service';
import { Component, Input, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/_services/currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

  constructor(public currencyStorage: CurrencyStorageService, protected currencyService: CurrencyService) {
    this.currencyService.getCurrency('BTCPLN').subscribe(
      res => this.currencyStorage.BTC = res,
      error => console.log('Error Message:', error.message));

    this.currencyService.getCurrency('LSKPLN').subscribe(
      res => this.currencyStorage.LSK = res,
      error => console.log('Error Message:', error.message));

    this.currencyService.getCurrency('ETHPLN').subscribe(
      res => this.currencyStorage.ETH = res,
      error => console.log('Error Message:', error.message));
  }

  ngOnInit() {
  }

}
