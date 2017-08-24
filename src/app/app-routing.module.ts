import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashplayComponent } from './cashplay/cashplay/cashplay.component';
import { AuthComponent } from './auth/auth/auth.component';


const routes: Routes = [
    {path: '', redirectTo: 'app', pathMatch: 'full'},
  {path: 'login', component: AuthComponent}
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
