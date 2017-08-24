import { CustomerService } from '../customer.service';
import { MdPaginator, MdSort } from '@angular/material';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Page } from '../../../api.service';
import { BaseCustomerDataSource, CustomerData } from '../base-customer-data-source';
import { Customer } from '../customer';

export class RecentlyAddedCustomersDataSource extends BaseCustomerDataSource {
  recentlyAddedCustomers: BehaviorSubject<CustomerData[]> = new BehaviorSubject<CustomerData[]>([]);

  get data(): CustomerData[] {
    return this.recentlyAddedCustomers.value;
  }

  constructor(protected customerService: CustomerService,
              protected _sort: MdSort,
              protected _paginator: MdPaginator,
              protected appConfig) {
    super(_sort, _paginator);

    this.changePageSize(this.appConfig.recentlyAddedCustomersPerPage);

    this.displayDataChanges.push(this.recentlyAddedCustomers);
    this.initialize();
  }

  initialize() {
    this.getRecentlyAddedCustomers({pageIndex: 0, pageSize: this._paginator.pageSize});
  }

  getRecentlyAddedCustomers(page: Page) {
    this.customerService.recentlyAdded(page)
      .subscribe(paginatedCustomers => {
        page.length = paginatedCustomers.page.totalElements;
        this.page.next(page);
        // this.changePageLength(paginatedCustomers.page.totalElements);
        // const copiedData = this.data.slice();
        const copiedData = [];
        for (const customer of <Customer[]>paginatedCustomers._embedded['customers']) {
          copiedData.push(customer);
          this.recentlyAddedCustomers.next(copiedData);
        }
      });
  }
}
