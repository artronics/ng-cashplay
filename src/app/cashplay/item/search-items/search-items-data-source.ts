import { BaseItemDataSource } from '../base-item-data-source';
import { Item } from '../item';
import { MdPaginator, MdSort } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AppConfig } from '../../../AppConfig';

export class SearchItemsDataSource extends BaseItemDataSource {
  searchResults: BehaviorSubject<Item[]> = new BehaviorSubject([]);

  constructor(sort: MdSort, paginator: MdPaginator, appConfig: AppConfig) {
    super(sort, paginator);

    this.displayDataChanges.push(this.searchResults);
    this.paginator.pageSize = appConfig.searchResultsPerPage;
  }

  get data(): Item[] {
    return this.searchResults.value;
  }

}
