import { Inject, Injectable } from '@angular/core';
import { Repository } from '../../shared/Repository';
import { Customer } from './Customer';
import { TABLE_HEADERS, TableHeader } from '../../shared/table/Table';
import { ApiService } from '../../api.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Pagable } from '../../shared/Pagable';
import { APP_CONFIG } from '../../app.config';


const customers: Customer[] = [
  new Customer('jalal', 'hosseiny'),
  new Customer('ali', 'mogh'),
  new Customer('luyda', 'booth'),
];

@Injectable()
export class CustomerService implements Repository<Customer>, Pagable<Customer> {
  resourcesPerPage: number;

  constructor(@Inject(APP_CONFIG) private appConfig,
              private api: ApiService,
              @Inject(TABLE_HEADERS) private headers: TableHeader<Customer>[]) {

    this.resourcesPerPage = appConfig.defaultResourcesPerPage;
  }

  all(): Observable<Customer[]> {
    return Observable.of<Customer[]>(customers);
  }


  goToPage(page: number): Observable<Customer[]> {
    return Observable.of<Customer[]>(customers.slice(0, page));
  }

  first(): Observable<Customer[]> {
    return Observable.of<Customer[]>(customers.slice(0, 1));
  }

  next(): Observable<Customer[]> {
    return null;
  }
}
