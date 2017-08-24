import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemRoutingModule } from './item-routing.module';
import { ItemsComponent } from './items/items.component';
import { SearchItemsComponent } from './search-items/search-items.component';
import { SharedModule } from '../../shared/shared.module';
import { MdButtonModule, MdInputModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { NewItemDialogComponent } from './new-item-dialog/new-item-dialog.component';

@NgModule({
  declarations: [
    ItemsComponent,
    SearchItemsComponent,
    NewItemDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,

    MdInputModule,
    MdButtonModule,

    ItemRoutingModule,
  ],
  exports: [
    ItemRoutingModule,
  ],
})
export class ItemModule {
}
