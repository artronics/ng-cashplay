import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {CashplayRoutingModule} from './cashplay-routing.module';
import { CustomerModule } from './customer/customer.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [],
  imports: [
    FormsModule,

    HomeModule,
    CustomerModule,
    CashplayRoutingModule,
  ],
  exports: [
    CashplayRoutingModule,
  ]
})
export class CashplayModule {
}
