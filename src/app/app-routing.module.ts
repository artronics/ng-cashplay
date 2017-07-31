import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from './cashplay/layout/layout.component';


const routes: Routes = [
    {path: '', redirectTo: 'app', pathMatch: 'full'},
    // {path: 'app', component: LayoutComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
