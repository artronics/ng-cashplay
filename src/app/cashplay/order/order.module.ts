import { NgModule } from '@angular/core';
import { OrderComponent } from './order/order.component';
import { OrderRoutingModule } from './order-routing.module';
import { BuybackModule } from './buyback/buyback.module';

@NgModule({
  declarations: [OrderComponent],
  imports: [
    BuybackModule,

    OrderRoutingModule,
  ],
  exports: [
    OrderRoutingModule,
  ],
})
export class OrderModule {
}
