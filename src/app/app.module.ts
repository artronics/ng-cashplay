import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdToolbarModule } from '@angular/material';

import { SharedModule } from './shared/shared.module';
import { CashplayModule } from './cashplay/cashplay.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import 'hammerjs';
import { APP_CONFIG, CASHPLAY_CONFIG } from './app.config';
import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdToolbarModule,

    SharedModule,
    CashplayModule,
    AppRoutingModule,
  ],
  providers: [
    {provide: APP_CONFIG, useValue: CASHPLAY_CONFIG},
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
