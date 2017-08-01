import { Inject, Injectable } from '@angular/core';
import { Repository } from '../../shared/Repository';
import { Customer } from './Customer';
import { TABLE_HEADERS, TableHeader } from '../../shared/table/Table';

const customers: Customer[] = [
  new Customer('jalal', 'hosseiny'),
  new Customer('ali', 'mogh'),
  new Customer('luyda', 'booth'),
];

@Injectable()
export class CustomerService implements Repository<Customer> {

  constructor(@Inject(TABLE_HEADERS) private headers: TableHeader[]) {
    console.log(this.headers);
  }

  all(): Customer[] {
    return customers;
  }
}
