import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdGridListModule, MdInputModule, MdTabsModule } from '@angular/material';
import { SharedModule } from '../../shared/shared.module';

import { CustomerComponent } from './customer/customer.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';

const routes: Routes = [
  {
    path: 'customer', component: CustomerComponent
  }
];
@NgModule({
  declarations: [
    CustomerComponent, NewCustomerComponent, SearchCustomerComponent, CustomerHomeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
    BrowserAnimationsModule,
    MdInputModule,
    MdTabsModule,
    MdGridListModule,
  ],
  exports: [RouterModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CustomerRoutingModule {
}
