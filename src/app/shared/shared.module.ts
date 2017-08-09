import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdCardModule,
  MdPaginatorModule,
  MdTableModule,
  MdSidenavModule,
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk';

import { PanelComponent } from './panel/panel.component';
import { PaginationComponent } from './pagination/pagination.component';
import { TableComponent } from './table/table.component';
import { ResourceListComponent } from './resource-list/resource-list.component';

@NgModule({
  declarations: [
    PanelComponent,
    PaginationComponent,
    TableComponent,
    ResourceListComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MdCardModule,
    MdPaginatorModule,
    MdButtonModule,
    MdTableModule,
    CdkTableModule,
    MdSidenavModule,
  ],
  exports: [
    PanelComponent,
    PaginationComponent,
    TableComponent,
    ResourceListComponent,
  ],
  schemas: []
})
export class SharedModule {
}
