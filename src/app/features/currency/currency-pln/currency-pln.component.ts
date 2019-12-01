import { CurrencyStorageService } from './../../../_services/currency-storage.service';
import { CurrencyService } from './../../../_services/currency.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-pln',
  templateUrl: './currency-pln.component.html',
  styleUrls: ['./currency-pln.component.scss']
})
export class CurrencyPlnComponent implements OnInit {

  constructor(public currencyStorage: CurrencyStorageService, protected currencyService: CurrencyService) {
    this.currencyService.getCurrency('BTCPLN').subscribe(
      res => this.currencyStorage = res,
      error => console.log('Error Message:', error.message));
   }

  ngOnInit() {
  }

}
