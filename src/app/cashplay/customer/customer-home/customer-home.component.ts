import { Component, OnInit } from '@angular/core';
import { Pagination } from '../../../shared/pagination/Pagination';
import { Table } from '../../../shared/table/Table';
import { Customer, CustomerResource, RECENT_CUSTOMERS_TABLE_HEADERS } from '../Customer';
import { CustomerService } from '../customer.service';
import { Observable } from 'rxjs/Observable';
import { Resource } from '../../../shared/resource-list/Resource';

@Component({
  selector: 'art-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.scss']
})
export class CustomerHomeComponent implements OnInit {
  recentCustomers: Observable<Customer[]>;
  recentCustomersPagination: Pagination<Customer>;
  resource: Resource<any> = new CustomerResource();

  constructor(private customerService: CustomerService) {
    const table = new Table(RECENT_CUSTOMERS_TABLE_HEADERS, Observable.of<Customer[]>([]));
    this.recentCustomersPagination = new Pagination(this.customerService, table);
  }

  ngOnInit() {
    this.recentCustomers = this.customerService.all();
  }

  pagination() {
    // return new Pagination(new Table<Customer>(RECENT_CUSTOMERS_TABLE_HEADERS, this.recentCustomers));
    return this.recentCustomersPagination;
  }
}
