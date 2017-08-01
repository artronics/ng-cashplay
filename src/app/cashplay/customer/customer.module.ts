import { NgModule } from '@angular/core';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerService } from './customer.service';

@NgModule({
  declarations: [],
  providers: [CustomerService],
  imports: [
    CustomerRoutingModule,
  ],
  exports: [CustomerRoutingModule],
})
export class CustomerModule {
}
