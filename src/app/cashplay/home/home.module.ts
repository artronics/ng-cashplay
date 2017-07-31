import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    HomeRoutingModule,
  ],
  exports: [HomeRoutingModule],
  declarations: []
})
export class HomeModule { }
