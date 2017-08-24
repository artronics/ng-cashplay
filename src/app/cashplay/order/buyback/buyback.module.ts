import { NgModule } from '@angular/core';
import { BuybackComponent } from './buyback/buyback.component';
import { BuybackRoutingModule } from './buyback-routing.module';

@NgModule({
  declarations: [BuybackComponent],
  imports: [
    BuybackRoutingModule,
  ],
  exports: [
    BuybackRoutingModule,
  ],
})
export class BuybackModule {
}
