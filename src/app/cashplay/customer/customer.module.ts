import { NgModule } from '@angular/core';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerService } from './customer.service';
import { TABLE_HEADERS } from '../../shared/table/Table';
import { RECENT_CUSTOMERS_TABLE_HEADERS } from './Customer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdTab, MdTableModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk';

@NgModule({
  declarations: [],
  providers: [
    CustomerService,
    {provide: TABLE_HEADERS, useValue: RECENT_CUSTOMERS_TABLE_HEADERS}
  ],
  imports: [
    CustomerRoutingModule,
    BrowserAnimationsModule,
    MdTableModule,
    CdkTableModule,
  ],
  exports: [CustomerRoutingModule],
})
export class CustomerModule {
}
