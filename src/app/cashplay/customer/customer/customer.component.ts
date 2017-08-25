import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MdDialog, MdDialogConfig } from '@angular/material';
import { NewCustomerDialogComponent } from '../new-customer-dialog/new-customer-dialog.component';
import { Customer } from '../customer';
import { EditCustomerDialogComponent } from '../edit-customer-dialog/edit-customer-dialog.component';
import { RecentlyAddedCustomersComponent } from '../recently-added-customers/recently-added-customers.component';

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

  @ViewChild(RecentlyAddedCustomersComponent)
  private _recentlyAddedCustomerComponent;

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
    this._recentlyAddedCustomerComponent.refresh();
  }

  customerEdited(customer: Customer) {
    this._editCustomerDialogRef.close();
    this._recentlyAddedCustomerComponent.refresh();
  }
}
