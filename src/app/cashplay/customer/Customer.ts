import { TableHeader } from '../../shared/table/Table';
export class Customer {
  firstName: string;
  lastName: string;


  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

export const RECENT_CUSTOMERS_TABLE_HEADERS: TableHeader<Customer>[] = [
  {fn: res => res.firstName, text: 'First Name'},
  {fn: res => res.lastName, text: 'Last Name'}
];
