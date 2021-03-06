import { HttpClientModule } from '@angular/common/http';
import { CurrencyStorageService } from './_services/currency-storage.service';
import { AuthGuardService } from './_services/auth-guard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { Page404Component } from './page404/page404.component';
import { FeaturesComponent } from './features/features.component';
import { CurrencyComponent } from './features/currency/currency.component';
import { CurrencyService } from './_services/currency.service';
import { CurrencyModule } from './features/currency/currency.module';
import { CurrencyViewComponent } from './features/currency/currency-view/currency-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    Page404Component,
    FeaturesComponent,
    CurrencyComponent,
    CurrencyViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CurrencyModule,
    HttpClientModule
  ],
  providers: [
    AuthGuardService,
    CurrencyService,
    CurrencyStorageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
