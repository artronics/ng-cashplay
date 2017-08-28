import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'art-new-customer-form',
  templateUrl: './new-customer-form.component.html',
  styleUrls: ['./new-customer-form.component.scss']
})
export class NewCustomerFormComponent implements OnInit {
  @Input() customer: Customer = new Customer;
  @Output() save: EventEmitter<Customer> = new EventEmitter();

  constructor() { }

  @ViewChild('newCustomerForm')
  private form;

  ngOnInit() {
  }

  onSubmit() {
    if (this.valid()) {
      this.save.emit(this.customer);
    }
  }
  valid() {
    return this.form.form.valid && this.customer.image !== '';
  }

  image(dataUri: string) {
    dataUri = dataUri.replace(/^data:image\/(png|jpg|jpeg);base64,/, '');
    this.customer.image = dataUri;
  }
}
