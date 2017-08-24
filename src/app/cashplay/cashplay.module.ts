import { NgModule } from '@angular/core';

import { MdButtonModule, MdMenuModule, MdSidenavModule, MdToolbarModule } from '@angular/material';

import { CashplayRoutingModule } from './cashplay-routing.module';
import { CustomerModule } from './customer/customer.module';

import { CashplayComponent } from './cashplay/cashplay.component';
import { NavComponent } from './nav/nav.component';
import { OrderModule } from './order/order.module';
import { ItemModule } from './item/item.module';

@NgModule({
  declarations: [
    CashplayComponent,
    NavComponent,
  ],
  imports: [
    CustomerModule,
    ItemModule,
    OrderModule,

    MdToolbarModule,
    MdButtonModule,
    MdMenuModule,
    MdSidenavModule,

    CashplayRoutingModule,
  ],
  exports: [CashplayRoutingModule]
})
export class CashplayModule {}
