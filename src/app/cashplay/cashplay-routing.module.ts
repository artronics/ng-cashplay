import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule } from '@angular/material';

import { LayoutComponent } from './layout/layout.component';
import { NavComponent } from './nav/nav.component';
import { CustomerComponent } from './customer/customer/customer.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  {
    path: 'app', component: LayoutComponent, children: [
    {path: '', redirectTo: 'home', pathMatch: 'prefix'},
    {path: 'home', component: HomeComponent},
    {
      path: 'customer', component: CustomerComponent
    }
  ]
  },
];
@NgModule({
  declarations: [
    LayoutComponent,
    NavComponent,
  ],
  imports: [
    RouterModule.forChild(routes),

    BrowserAnimationsModule,
    MdToolbarModule,
  ],
  exports: [RouterModule]
})
export class CashplayRoutingModule {
}
