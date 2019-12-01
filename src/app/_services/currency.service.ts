import { CurrencyModel } from './../_models/currency.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  url = 'https://bitbay.net/API/Public/';
  constructor(protected httpClient: HttpClient) { }

  public getCurrency(currency: string): Observable<CurrencyModel[]> {
    return this.httpClient.get<CurrencyModel[]>(`${this.url}/${currency}/ticker.json`);
}
}
