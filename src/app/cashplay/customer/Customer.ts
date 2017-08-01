import { TableHeader } from '../../shared/table/Table';
export class Customer {
  firstName: string;
  lastName: string;


  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

export const RECENT_CUSTOMERS_TABLE_HEADERS: TableHeader[] = [
  {name: 'firstName', text: 'First Name'},
  {name: 'lastName', text: 'Last Name'}
];
