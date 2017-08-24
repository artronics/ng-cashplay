import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashplayComponent } from './cashplay/cashplay.component';
import { CustomerComponent } from './customer/customer/customer.component';
import { BuybackComponent } from './order/buyback/buyback/buyback.component';
import { ItemsComponent } from './item/items/items.component';


const routes: Routes = [
  {path: 'app', component: CashplayComponent, children: [
    {path: 'customer', component: CustomerComponent},
    {path: 'item', component: ItemsComponent},
    {path: 'buyback', component: BuybackComponent},
  ] },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CashplayRoutingModule {}
