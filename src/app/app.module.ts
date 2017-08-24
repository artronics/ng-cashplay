import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { LocalStorageService, WebStorageModule } from 'angular2-localstorage';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CashplayModule } from './cashplay/cashplay.module';

import { AppComponent } from './app.component';

import 'hammerjs';
import { APP_CONFIG, CASHPLAY_CONFIG } from './AppConfig';
import { ApiService } from './api.service';
import { HttpModule } from '@angular/http';
import { MdSnackBarModule } from '@angular/material';
import { ItemService } from './cashplay/item/item.service';
import { AuthModule } from './auth/auth.module';

// import { LocalStorageService } from './LocalStorageEmitter';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // WebStorageModule,

    BrowserAnimationsModule,
    MdSnackBarModule,
    SharedModule,
    CashplayModule,
    AuthModule,
    AppRoutingModule,
  ],
  providers: [
    {provide: APP_CONFIG, useValue: CASHPLAY_CONFIG},
    // LocalStorageService,
    ApiService,
    ItemService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
