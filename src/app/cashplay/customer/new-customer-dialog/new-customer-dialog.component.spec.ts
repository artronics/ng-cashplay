import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCustomerDialogComponent } from './new-customer-dialog.component';
import { CustomerService } from '../customer.service';
import { customerServiceStub } from '../customer-test';
import { MdButtonModule, MdDialogModule, MdDialogRef, MdInputModule, MdSnackBar } from '@angular/material';
import { NewCustomerFormComponent } from '../new-customer-form/new-customer-form.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../../../shared/shared.module';

const mdSnackBarStub = {
  open() {
  }
};
const mdDialogRef = {};

describe('NewCustomerDialogComponent', () => {
  let component: NewCustomerDialogComponent;
  let fixture: ComponentFixture<NewCustomerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewCustomerDialogComponent, NewCustomerFormComponent],
      providers: [{provide: CustomerService, useValue: customerServiceStub},
        {provide: MdSnackBar, useValue: mdSnackBarStub},
        {provide: MdDialogRef, useValue: mdDialogRef}
      ],
      imports: [
        SharedModule,
        FormsModule,
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
    fixture = TestBed.createComponent(NewCustomerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
