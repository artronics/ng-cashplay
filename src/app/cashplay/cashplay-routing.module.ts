import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LayoutComponent} from './layout/layout.component';
import {NavComponent} from './nav/nav.component';
import {CustomerComponent} from './customer/customer/customer.component';
import {CustomerHomeComponent} from './customer/customer-home/customer-home.component';
import {HomeComponent} from './home/home/home.component';

const routes: Routes = [
  {
    path: 'app', component: LayoutComponent, children: [
    {path: '', redirectTo: 'home', pathMatch: 'prefix'},
    {path: 'home', component: HomeComponent},
    {path: 'customer', component: CustomerComponent}
  ]
  },
  // {
  //   path: 'app', component: LayoutComponent, children: [
  //   {path: '', redirectTo: 'home', pathMatch: 'full'},
  //   {path: 'home', component: HomeComponent},
  //   {path: 'customer', component: CustomerComponent, children: [
  //     {path: 'home', component: CustomerHomeComponent}
  //   ]}
  //   // {path: '', redirectTo: 'customer', pathMatch: 'full'}
  // ]
  // },
];
@NgModule({
  declarations: [
    LayoutComponent,
    NavComponent,
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashplayRoutingModule {
}
