import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';

import {CustomerComponent} from './customer/customer.component';
import {CustomerHomeComponent} from './customer-home/customer-home.component';
import {SearchCustomerComponent} from './search-customer/search-customer.component';
import {NewCustomerComponent} from './new-customer/new-customer.component';

const routes: Routes = [
  {
    path: 'customer', component: CustomerComponent, children: [
    // {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: CustomerHomeComponent},
    {
      path: '', children: [
      {path: 'home', component: CustomerHomeComponent},
      // {path: 'search', component: SearchCustomerComponent},
      {path: 'new', component: NewCustomerComponent},
    ]
    },
  ]
  },
  {
    path: '', component: CustomerComponent, children: [
    {path: 'search', component: SearchCustomerComponent},
  ]},
];
@NgModule({
  declarations: [
    CustomerComponent, NewCustomerComponent, SearchCustomerComponent, CustomerHomeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
  ],
  exports: [RouterModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CustomerRoutingModule {
}
