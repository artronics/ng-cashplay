import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {LayoutComponent} from "./layout/layout.component";
import {NavComponent} from "./nav/nav.component";
import {CustomerComponent} from "./customer/customer/customer.component";
import {CustomerHomeComponent} from "./customer/customer-home/customer-home.component";
import {HomeComponent} from "./home/home/home.component";
import {SearchCustomerComponent} from "./customer/search-customer/search-customer.component";
import {NewCustomerComponent} from "./customer/new-customer/new-customer.component";

const routes: Routes = [
  {
    path: 'app', component: LayoutComponent, children: [
    {path: '', redirectTo: 'home', pathMatch: 'prefix'},
    {path: 'home', component: HomeComponent},
    {
      path: 'customer', component: CustomerComponent, children: [
      // FIXME put routes to customer module
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: CustomerHomeComponent},
      {path: 'search', component: SearchCustomerComponent},
      {path: 'new', component: NewCustomerComponent},
    ]
    }
  ]
  },
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
