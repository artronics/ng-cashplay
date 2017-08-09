import { TableHeader } from '../../shared/table/Table';
import { Resource } from '../../shared/resource-list/Resource';
import { CollectionViewer } from '@angular/cdk';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
export class Customer {
  firstName: string;
  lastName: string;


  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

export class CustomerResource<Customer> extends Resource<Customer> {
  displayedColumns = ['userId', 'userName', 'progress', 'color'];
  dataChange = new BehaviorSubject<Customer[]>([]);
  disconnect(collectionViewer: CollectionViewer): void {
  }
}
export const RECENT_CUSTOMERS_TABLE_HEADERS: TableHeader<Customer>[] = [
  {fn: res => res.firstName, text: 'First Name'},
  {fn: res => res.lastName, text: 'Last Name'}
];
