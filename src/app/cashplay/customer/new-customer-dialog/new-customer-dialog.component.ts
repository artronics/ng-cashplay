import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'art-new-customer-dialog',
  templateUrl: './new-customer-dialog.component.html',
  styleUrls: ['./new-customer-dialog.component.scss']
})
export class NewCustomerDialogComponent implements OnInit {
  submitting = false;
  @Output() customer: EventEmitter<Customer> = new EventEmitter();
  constructor(private customerService: CustomerService,
              public snackBar: MdSnackBar) { }

  ngOnInit() {
  }

  onNewCustomer(customer: Customer) {
    this.submitting = true;
    this.customerService.create(customer)
      .subscribe(c => {
        this.submitting = false;
        this.customer.emit(c);
        this.snackBar.open('New customer created successfully.', null, {duration: 3000, extraClasses: ['art-snack-success']});
      }, error2 => {this.submitting = false; });
  }
}
