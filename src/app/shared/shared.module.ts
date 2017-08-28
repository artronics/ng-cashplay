import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdCardModule,
  MdDialogModule,
  MdPaginatorModule,
  MdSortModule,
  MdTableModule
} from '@angular/material';
import { TableComponent } from './table/table.component';
import { CdkTableModule } from '@angular/cdk';
import { ResourceListComponent } from './resource-list/resource-list.component';
import { ErrorBoxComponent } from './error-box/error-box.component';
import { DialogComponent } from './dialog/dialog.component';
import { WebcamComponent as MyWebcamComponent } from './webcam/webcam.component';

@NgModule({
  declarations: [
    CardComponent,
    TableComponent,
    ResourceListComponent,
    ErrorBoxComponent,
    DialogComponent,
    MyWebcamComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdTableModule,
    CdkTableModule,
    MdSortModule,
    MdPaginatorModule,
    MdDialogModule,
  ],
  exports: [
    CardComponent,
    TableComponent,
    ResourceListComponent,
    DialogComponent,
    MyWebcamComponent,
  ],
})
export class SharedModule {}
