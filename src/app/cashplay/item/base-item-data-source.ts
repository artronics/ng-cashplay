import { BaseDataSource } from '../../base-data-source';
import { Item } from './item';
import { MdPaginator, MdSort } from '@angular/material';

export abstract class BaseItemDataSource extends BaseDataSource<Item> {

  constructor(sort: MdSort, paginator: MdPaginator) {
    super(sort, paginator);
  }

  protected getSortedData(): Item[] {
    const data = this.data.slice();
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      return Item.Sort(a, b, this.sort.active, this.sort.direction);
    });
  }
}
