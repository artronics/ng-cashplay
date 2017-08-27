import { BaseCustomerDataSource, CustomerData } from '../base-customer-data-source';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CustomerService } from '../customer.service';
import { MdPaginator, MdSort } from '@angular/material';
import { Customer } from '../customer';
import { Page } from '../../../api.service';
import 'rxjs/add/observable/of';

export class CustomerSearchDataSource extends BaseCustomerDataSource {
  searchedCustomers: BehaviorSubject<Customer[]> = new BehaviorSubject<Customer[]>([]);

  constructor(private customerService: CustomerService, sort: MdSort, paginator: MdPaginator, appConfig) {
    super(sort, paginator);

    this.displayDataChanges.push(this.searchedCustomers);

    this.paginator.pageSize = appConfig.searchResultsPerPage;
  }

  get data(): CustomerData[] {
    return this.searchedCustomers.value;
  }

  search(term: string, page: Page) {
    const foundCustomer = this.customerService.search<Customer>(term, page);

    foundCustomer.subscribe((paginatedCustomers) => {
      page.length = paginatedCustomers.page.totalElements;
      this.page.next(page);

      const copiedData = [];
      const customers = paginatedCustomers._embedded ? paginatedCustomers._embedded['customers'] : [];
      for (const customer of customers) {
        copiedData.push(customer);
        this.searchedCustomers.next(copiedData);
      }
    });

    return foundCustomer;
  }
}
