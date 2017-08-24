import { Component, OnDestroy, OnInit } from '@angular/core';
import { MdDialog, MdDialogConfig } from '@angular/material';
import { NewCustomerDialogComponent } from '../new-customer-dialog/new-customer-dialog.component';
import { Customer } from '../customer';
import { EditCustomerDialogComponent } from '../edit-customer-dialog/edit-customer-dialog.component';

@Component({
  selector: 'art-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit, OnDestroy {
  private _newCustomerDialogRef;
  private _editCustomerDialogRef;
  private _dialogConfig: MdDialogConfig = {
    width: '66%',
    disableClose: true
  };

  constructor(public newCustomerDialog: MdDialog, public editCustomerDialog: MdDialog) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this._newCustomerDialogRef && this._newCustomerDialogRef.componentInstance.customer) {
      this._newCustomerDialogRef.componentInstance.customer.unsubscribe();
    }
    if (this._editCustomerDialogRef && this._editCustomerDialogRef.componentInstance.customer) {
      this._editCustomerDialogRef.componentInstance.customer.unsubscribe();
    }
  }

  newCustomer() {
    this._newCustomerDialogRef = this.newCustomerDialog.open(NewCustomerDialogComponent, this._dialogConfig);
    this._newCustomerDialogRef.componentInstance.customer
      .subscribe(c => this.newCustomerAdded(c), err => {
        console.error(err);
      });
  }

  editCustomer(customer: Customer) {
    this._dialogConfig.data = customer;
    this._editCustomerDialogRef = this.editCustomerDialog.open(EditCustomerDialogComponent, this._dialogConfig);
    this._editCustomerDialogRef.componentInstance.customer
      .subscribe(c => this.customerEdited(c), err => {
        console.error(err);
      });
  }

  newCustomerAdded(customer: Customer) {
    this._newCustomerDialogRef.close();
    console.log('new customer added:');
    console.log(customer);
  }

  customerEdited(customer: Customer) {
    this._editCustomerDialogRef.close();
    console.log('customer edited:');
    console.log(customer);
  }
}
