import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-view',
  templateUrl: './currency-view.component.html',
  styleUrls: ['./currency-view.component.scss']
})
export class CurrencyViewComponent implements OnInit {

  @Input()
  currencyPLN: string;
  @Input()
  currencyUSD: string;
  @Input()
  store;
  constructor() { }

  ngOnInit() {
  }

}
