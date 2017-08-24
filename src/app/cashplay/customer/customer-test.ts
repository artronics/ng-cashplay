import { Observable } from 'rxjs/Observable';
import { IPaginatedResource } from '../../api.service';
import { Customer } from './customer';
import 'rxjs/add/observable/of';
import { BaseCustomerDataSource, CustomerData } from './base-customer-data-source';
import { Subject } from 'rxjs/Subject';
import { MdPaginator, MdSort } from '@angular/material';

export class TestCustomerDataSources extends BaseCustomerDataSource {
  dataLength: Subject<number> = new Subject();

  constructor(sort: MdSort, paginator: MdPaginator) {
    super(sort, paginator);
  }

  get data(): CustomerData[] {
    return null;
  }
}
export const customerServiceStub = {
  recentlyAdded() {
    return Observable.of<IPaginatedResource<Customer[]>>();
  }
};
