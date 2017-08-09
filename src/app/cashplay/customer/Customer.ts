import { ColumnDefs, TableHeader } from '../../shared/table/Table';
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

export class CustomerResource extends Resource<Customer> {
  displayedColumns = ['firstName', 'lastName'];
  dataChange = new BehaviorSubject<Customer[]>([]);
  columns: ColumnDefs<Customer> = {
    columnIds: ['firstName', 'lastName'],
    columns: RECENT_CUSTOMERS_TABLE_HEADERS,
  };

  constructor() {
    super();
    const copiedData = this.data.slice();
    copiedData.push(new Customer('jalal', 'hos'));
    this.dataChange.next(copiedData);
  }

  disconnect(collectionViewer: CollectionViewer): void {
  }
}

export const RECENT_CUSTOMERS_TABLE_HEADERS: TableHeader<Customer>[] = [
  {id: 'firstName', text: 'First Name'},
  {id: 'lastName', text: 'Last Name'}
];
