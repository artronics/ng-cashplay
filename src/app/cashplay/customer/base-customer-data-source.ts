import { DataSource } from '@angular/cdk';
import { MdPaginator, MdSort } from '@angular/material';
import { BaseDataSource } from '../../base-data-source';
import { BaseResourceData } from '../../base-resource';
import { Customer } from './customer';

export interface CustomerData extends BaseResourceData {
  firstName: string;
  lastName: string;
}

export abstract class BaseCustomerDataSource extends BaseDataSource<Customer> implements DataSource<Customer> {

  constructor(protected sort: MdSort, protected paginator: MdPaginator) {
    super(sort, paginator);
  }

  protected getSortedData(): Customer[] {
    const data = this.data.slice();
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      return Customer.Sort(a, b, this.sort.active, this.sort.direction);
    });
  }
}
