import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelComponent } from './panel/panel.component';
import { PaginationComponent } from './pagination/pagination.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    PanelComponent,
    PaginationComponent,
    TableComponent,
  ],
  imports: [CommonModule],
  exports: [
    PanelComponent,
    PaginationComponent,
    TableComponent,
  ]
})
export class SharedModule {
}
