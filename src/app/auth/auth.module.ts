import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { MdButtonModule, MdInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [AuthComponent, RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    SharedModule,

    MdButtonModule,
    MdInputModule,

    AuthRoutingModule,
  ],
  exports: [
    AuthRoutingModule,
  ],
  providers: [
    AuthService,
  ]
})
export class AuthModule {}
