import { Component, OnInit } from '@angular/core';
import { Pagination } from '../../../shared/pagination/Pagination';
import { Table } from '../../../shared/table/Table';
import { Customer } from '../customer/Customer';

@Component({
  selector: 'art-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.scss']
})
export class CustomerHomeComponent implements OnInit {
  title: 'kir';

  constructor() { }

  ngOnInit() {
  }

  pagination() {
    const customers = [new Customer('jalal', 'hos'), new Customer('ali', 'mogh')];
    const headers = [{name: 'firstName', text: 'First Name'}, {name: 'lastName', text: 'Last Name'}];
    return new Pagination(new Table<Customer>(headers, customers));
  }
}
