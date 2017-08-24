import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCustomerDialogComponent } from './edit-customer-dialog.component';
import { CustomerService } from '../customer.service';
import {
  MD_DIALOG_DATA,
  MdButtonModule,
  MdDialogModule,
  MdDialogRef,
  MdInputModule,
  MdSnackBar
} from '@angular/material';
import { NewCustomerFormComponent } from '../new-customer-form/new-customer-form.component';
import { customerServiceStub } from '../customer-test';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';

const mdSnackBarStub = {
  open() {
  }
};
const mdDialogRef = {};
const dialogData = {};

describe('EditCustomerDialogComponent', () => {
  let component: EditCustomerDialogComponent;
  let fixture: ComponentFixture<EditCustomerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditCustomerDialogComponent, NewCustomerFormComponent],
      providers: [{provide: CustomerService, useValue: customerServiceStub},
        {provide: MD_DIALOG_DATA, useValue: dialogData},
        {provide: MdSnackBar, useValue: mdSnackBarStub},
        {provide: MdDialogRef, useValue: mdDialogRef}
      ],
      imports: [
        FormsModule,
        SharedModule,
        BrowserAnimationsModule,
        MdDialogModule,
        MdButtonModule,
        MdInputModule,
        MdButtonModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCustomerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
