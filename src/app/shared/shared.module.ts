import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  imports: [CommonModule],
  exports: [
    PanelComponent,
    PaginationComponent,
    TableComponent,
    ResourceListComponent,
  ]
})
export class SharedModule {
}
