import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuybackComponent } from './buyback/buyback.component';

const routes: Routes = [
  {path: 'buyback', component: BuybackComponent},
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
export class BuybackRoutingModule {
}
