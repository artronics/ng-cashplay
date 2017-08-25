import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { APP_CONFIG } from '../../../AppConfig';
import { PageEvent } from '@angular/material';
import { BaseCustomerComponent } from '../base-customer-component';
import { Table } from '../../../shared/table/Table';
import { RecentlyAddedCustomersDataSource } from './recently-added-customers-data-source';

@Component({
  selector: 'art-recently-added-customers',
  templateUrl: './recently-added-customers.component.html',
  styleUrls: ['./recently-added-customers.component.scss']
})
export class RecentlyAddedCustomersComponent extends BaseCustomerComponent implements OnInit {
  table: Table<Customer>;

  dataSource: RecentlyAddedCustomersDataSource;

  @Output() editCustomer: EventEmitter<Customer> = new EventEmitter<Customer>();

  ngOnInit() {
    super.ngOnInit();
  }

  protected connectDataSource() {
    this.dataSource =
      new RecentlyAddedCustomersDataSource(this.customerService,
        this.resourceListComponent.tableComponent.sort,
        this.resourceListComponent.tableComponent.paginator,
        this.appConfig);

    const page = {
      pageSize: this.appConfig.recentlyAddedCustomersPerPage,
      length: this.dataSource.data.length,
      pageIndex: 0,
    };

    this.dataSource.page.next(page);
    // FIXME why below line does not work? why {...page} causes no event stream?
    // this.dataSource.nextPage(page);

    this.table = new Table<Customer>(BaseCustomerComponent.displayedColumns,
      BaseCustomerComponent.columns,
      page,
      this.appConfig.pageSizeOptions);
  }

  constructor(protected customerService: CustomerService, @Inject(APP_CONFIG) protected appConfig) {
    super();
  }

  onPaginationChange(page: PageEvent) {
    super.onPaginationChange(page);
    this.dataSource.getRecentlyAddedCustomers(page);
  }

  refresh() {
    this.dataSource.getRecentlyAddedCustomers(this.dataSource.page.getValue());
  }

  edit() {
    this.editCustomer.emit(this.selectedResource);
  }
}
