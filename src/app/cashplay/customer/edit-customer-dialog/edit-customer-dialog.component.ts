import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MD_DIALOG_DATA, MdSnackBar } from '@angular/material';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'art-edit-customer-dialog',
  templateUrl: './edit-customer-dialog.component.html',
  styleUrls: ['./edit-customer-dialog.component.scss']
})
export class EditCustomerDialogComponent implements OnInit {
  submitting = false;
  @Output() customer: EventEmitter<Customer> = new EventEmitter();
  editingCustomer: Customer;


  constructor(@Inject(MD_DIALOG_DATA) private orgCustomer: any,
              private customerService: CustomerService,
              public snackBar: MdSnackBar) {
    this.editingCustomer = {...this.orgCustomer};
  }

  ngOnInit() {
  }

  onEditCustomer(customer: Customer) {
    this.submitting = true;
    this.customerService.update(customer)
      .subscribe(c => {
        this.submitting = false;
        this.customer.emit(c);
        this.snackBar.open('Customer edited successfully.', null, {
          duration: 3000,
          extraClasses: ['art-snack-success']
        });
      }, error2 => this.submitting = false);
  }
}
