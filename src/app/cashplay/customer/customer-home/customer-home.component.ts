import { Component, OnInit } from '@angular/core';
import { Pagination } from '../../../shared/pagination/Pagination';
import { Table } from '../../../shared/table/Table';
import { Customer, RECENT_CUSTOMERS_TABLE_HEADERS } from '../Customer';
import { CustomerService } from '../customer.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'art-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.scss']
})
export class CustomerHomeComponent implements OnInit {
  recentCustomers: Observable<Customer[]>;
  recentCustomersPagination: Pagination<Customer>;

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
