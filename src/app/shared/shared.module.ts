import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdPaginatorModule } from '@angular/material';

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
  ],
  exports: [
    PanelComponent,
    PaginationComponent,
    TableComponent,
    ResourceListComponent,
  ]
})
export class SharedModule {
}
