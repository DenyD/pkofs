import { CurrencyComponent } from './features/currency/currency.component';
import { AuthGuardService } from './_services/auth-guard.service';
import { FeaturesComponent } from './features/features.component';
import { Page404Component } from './page404/page404.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent
  },
  {
    path: 'logout',
    component: LoginPageComponent
  },
  {
    path: 'features',
    component: FeaturesComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'currency',
    component: CurrencyComponent,
    loadChildren: () => import(`./features/currency/currency.module`).then(m => m.CurrencyModule)
  },
  {
    path: '**',
    component: Page404Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
