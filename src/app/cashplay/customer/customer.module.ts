import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerSearchComponent } from './customer-search/customer-search.component';
import { SharedModule } from '../../shared/shared.module';
import {
  MdButtonModule,
  MdDialogModule,
  MdInputModule,
  MdProgressSpinnerModule,
  MdSnackBarModule
} from '@angular/material';
import { NewCustomerDialogComponent } from './new-customer-dialog/new-customer-dialog.component';
import { NewCustomerFormComponent } from './new-customer-form/new-customer-form.component';
import { CustomerService } from './customer.service';
import { RecentlyAddedCustomersComponent } from './recently-added-customers/recently-added-customers.component';
import { EditCustomerDialogComponent } from './edit-customer-dialog/edit-customer-dialog.component';

@NgModule({
  declarations: [
    CustomerComponent,
    CustomerSearchComponent,
    NewCustomerDialogComponent,
    NewCustomerFormComponent,
    RecentlyAddedCustomersComponent,
    EditCustomerDialogComponent
  ],
  imports: [
    CustomerRoutingModule,
    SharedModule,

    FormsModule,
    CommonModule,

    MdButtonModule,
    MdInputModule,
    // FIXME Do not delete this one otherwise cancel btn in dialog does not work
    MdDialogModule,
    MdProgressSpinnerModule,
    MdSnackBarModule,
  ],
  entryComponents: [
    NewCustomerDialogComponent,
    EditCustomerDialogComponent,
  ],
  providers: [CustomerService],
  exports: [CustomerRoutingModule],
})
export class CustomerModule {
}

