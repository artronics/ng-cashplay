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

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this.recentCustomers = this.customerService.all();
  }

  pagination() {
    return new Pagination(new Table<Customer>(RECENT_CUSTOMERS_TABLE_HEADERS, this.recentCustomers));
  }
}
