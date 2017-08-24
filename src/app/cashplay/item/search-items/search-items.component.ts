import { Component, Inject, OnInit } from '@angular/core';
import { BaseItemComponent } from '../base-item-component';
import { Item } from '../item';
import { Table } from '../../../shared/table/Table';
import { SearchItemsDataSource } from './search-items-data-source';
import { APP_CONFIG } from '../../../AppConfig';
import { ItemService } from '../item.service';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { IPaginatedResource, Page, PaginatedResource } from '../../../api.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'art-search-items',
  templateUrl: './search-items.component.html',
  styleUrls: ['./search-items.component.scss']
})
export class SearchItemsComponent extends BaseItemComponent implements OnInit {
  table: Table<Item>;
  dataSource: SearchItemsDataSource;
  q = '';
  connectionError: string = null;

  dataLength = 0;
  searchTerm: Subject<string> = new Subject();
  foundItems: Observable<IPaginatedResource<Item[]>>;

  constructor(protected itemService: ItemService, @Inject(APP_CONFIG) protected appConfig) {
    super();
  }

  protected connectDataSource() {
    this.dataSource =
      new SearchItemsDataSource(
        this.resourceListComponent.tableComponent.sort,
        this.resourceListComponent.tableComponent.paginator,
        this.appConfig);

    const page: Page = {
      pageSize: this.appConfig.searchResultsPerPage,
      length: this.dataSource.data.length,
      pageIndex: 0,
    };

    this.table = new Table<Item>(
      BaseItemComponent.displayedColumns,
      BaseItemComponent.columns,
      page,
      this.appConfig.pageSizeOptions);
  }

  ngOnInit() {
    super.ngOnInit();
    const p = {pageSize: this.appConfig.searchResultsPerPage, length: 1, pageIndex: 0};
    this.foundItems = this.searchTerm
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => {
        this.connectionError = null;
        return term
          ? this.itemService.search(term, p)
          : Observable.of<IPaginatedResource<Item[]>>(new PaginatedResource({items: []}));
      })
      .catch(err => {
        this.connectionError = 'Connection Error, check your Internet connection!';
        console.error(err);
        return Observable.of<IPaginatedResource<Item[]>>(new PaginatedResource({items: []}));
      });

    this.foundItems.subscribe(items => {
      this.dataSource.searchResults.next(items._embedded['items']);
      this.dataLength = items.page.totalElements;
    });
  }

  search(searchTerm: string) {
    if (searchTerm === '') {
      this.connectionError = null;
    }
    this.searchTerm.next(searchTerm);
  }
}
