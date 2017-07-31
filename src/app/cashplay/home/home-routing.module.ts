import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, children: [

  ]},
];

@NgModule({
  declarations: [HomeComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
