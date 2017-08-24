import { BaseCustomerDataSource, CustomerData } from '../base-customer-data-source';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CustomerService } from '../customer.service';
import { MdPaginator, MdSort } from '@angular/material';
import { Customer } from '../customer';

export class CustomerSearchDataSource extends BaseCustomerDataSource {
  searchedCustomers: BehaviorSubject<Customer[]> = new BehaviorSubject<Customer[]>([]);

  constructor(customerService: CustomerService, sort: MdSort, paginator: MdPaginator, appConfig) {
    super(sort, paginator);

    this.displayDataChanges.push(this.searchedCustomers);

    this.paginator.pageSize = appConfig.searchResultsPerPage;
  }

  get data(): CustomerData[] {
    return this.searchedCustomers.value;
  }
}
