export class Customer {
  firstName: string;
  lastName: string;


  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

export const CustomerTableHeaders = [
  {name: 'firstName', text: 'First Name'},
  {name: 'lastName', text: 'Last Name'}
];
