import { Inject, Injectable } from '@angular/core';
import { Repository } from '../../shared/Repository';
import { Customer } from './Customer';
import { TABLE_HEADERS, TableHeader } from '../../shared/table/Table';
import { ApiService } from '../../api.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


const customers: Customer[] = [
  new Customer('jalal', 'hosseiny'),
  new Customer('ali', 'mogh'),
  new Customer('luyda', 'booth'),
];

@Injectable()
export class CustomerService implements Repository<Customer> {

  constructor(private api: ApiService,
              @Inject(TABLE_HEADERS) private headers: TableHeader<Customer>[]) {
  }

  all(): Observable<Customer[]> {
    return Observable.of<Customer[]>(customers);
  }
}
