import { Injectable } from '@angular/core';
import { Repository } from '../../shared/Repository';
import { Customer } from './Customer';

const customers: Customer[] = [
  new Customer('jalal', 'hosseiny'),
  new Customer('ali', 'mogh'),
  new Customer('luyda', 'booth'),
];

@Injectable()
export class CustomerService implements Repository<Customer> {

  all(): Customer[] {
    return customers;
  }
}
