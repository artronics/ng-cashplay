import { Component, OnInit } from '@angular/core';
import { Customer } from '../Customer';

@Component({
  selector: 'art-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss']
})
export class NewCustomerComponent implements OnInit {
  customer = new Customer('jalal', 'ghiolie');

  constructor() { }

  ngOnInit() {
  }

  onSave() {
  }
}
