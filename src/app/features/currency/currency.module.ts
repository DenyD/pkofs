import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPlnComponent } from './currency-pln/currency-pln.component';
import { CurrencyUsdComponent } from './currency-usd/currency-usd.component';



@NgModule({
  declarations: [CurrencyPlnComponent, CurrencyUsdComponent],
  imports: [
    CommonModule
  ]
})
export class CurrencyModule { }
