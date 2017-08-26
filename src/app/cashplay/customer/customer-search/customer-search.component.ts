import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { Table } from '../../../shared/table/Table';
import { BaseCustomerComponent } from '../base-customer-component';
import { APP_CONFIG } from '../../../AppConfig';
import { CustomerService } from '../customer.service';
import { CustomerSearchDataSource } from './customer-search-data-source';
import { Customer } from '../customer';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { IPaginatedResource, PaginatedResource } from '../../../api.service';
import { CustomerData } from '../base-customer-data-source';
import { PageEvent } from '@angular/material';


@Component({
  selector: 'art-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.scss']
})
export class CustomerSearchComponent extends BaseCustomerComponent implements OnInit {
  table: Table<Customer>;
  dataSource: CustomerSearchDataSource;

  dataLength = 0;

  @Output() newCustomer: EventEmitter<any> = new EventEmitter();

  q = '';
  searchTerm: Subject<string> = new Subject<string>();
  foundCustomers: Observable<IPaginatedResource<CustomerData[]>>;


  protected connectDataSource() {
    this.dataSource =
      new CustomerSearchDataSource(this.customerService,
        this.resourceListComponent.tableComponent.sort,
        this.resourceListComponent.tableComponent.paginator,
        this.appConfig);

    const page = {
      pageSize: 3,
      length: this.dataSource.data.length,
      pageIndex: 0,
    };

    this.dataSource.page.next(page);

    this.table = new Table<Customer>(BaseCustomerComponent.displayedColumns,
      BaseCustomerComponent.columns,
      page,
      this.appConfig.pageSizeOptions);
  }

  ngOnInit() {
    super.ngOnInit();
    const p = {pageSize: 3, length: 1, pageIndex: 0};
    this.foundCustomers = this.searchTerm
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term
        ? this.dataSource.search(term, p)
        : Observable.of<IPaginatedResource<Customer[]>>(new PaginatedResource({customers: []}))
      )
      .catch(err => {
        console.log(err);
        return Observable.of<IPaginatedResource<Customer[]>>(new PaginatedResource({customers: []}));
      });

    this.foundCustomers.subscribe(c => {
      console.log('kir');
      this.dataSource.searchedCustomers.next(c._embedded['customers']);
      if (c.page.totalElements) {
        this.dataSource.changePageLength(c.page.totalElements);
        this.dataLength = c.page.totalElements;
        return;
      }
      this.dataSource.changePageLength(0);
      this.dataLength = 0;
    });
  }

  constructor(protected customerService: CustomerService, @Inject(APP_CONFIG) protected appConfig) {
    super();
  }

  onNewCustomer() {
    this.newCustomer.emit();
  }

  search(q) {
    this.searchTerm.next(q);
  }


  onPaginationChange(page: PageEvent) {
    super.onPaginationChange(page);
    this.dataSource.search(this.q, page);
  }
}
