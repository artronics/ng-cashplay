import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerComponent } from './customer.component';
import { CustomerSearchComponent } from '../customer-search/customer-search.component';
import { RecentlyAddedCustomersComponent } from '../recently-added-customers/recently-added-customers.component';
import { SharedModule } from '../../../shared/shared.module';
import { MdDialog, MdDialogRef, MdIconModule, MdInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { customerServiceStub } from '../customer-test';
import { CustomerService } from '../customer.service';
import { APP_CONFIG, CASHPLAY_CONFIG } from '../../../AppConfig';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { EditCustomerDialogComponent } from '../edit-customer-dialog/edit-customer-dialog.component';
import { NewCustomerDialogComponent } from '../new-customer-dialog/new-customer-dialog.component';
import { NewCustomerFormComponent } from '../new-customer-form/new-customer-form.component';

describe('CustomerComponent', () => {
  let component: CustomerComponent;
  let fixture: ComponentFixture<CustomerComponent>;
  // const mdDialogRef = new MdDialogRef(new OverlayRef(null, null, null, null, null), new MdDialogContainer(null, null, null, null));
  const mdDialogRef = {};
  const mdDialogStub = {};
  // mdDialogRef.componentInstance = new EditCustomerDialogComponent(null, null, null);
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CustomerComponent,
        CustomerSearchComponent,
        RecentlyAddedCustomersComponent,
        NewCustomerFormComponent,
        NewCustomerDialogComponent,
        EditCustomerDialogComponent,
      ],
      providers: [
        {provide: CustomerService, useValue: customerServiceStub},
        {provide: APP_CONFIG, useValue: CASHPLAY_CONFIG},
        {provide: MdDialogRef, useValue: mdDialogRef},
        {provide: MdDialog, useValue: mdDialogStub},
      ],
      imports: [
        FormsModule,
        SharedModule,
        MdIconModule,
        MdInputModule,
      ],
    })
      .overrideModule(BrowserDynamicTestingModule, {
        set: {
          entryComponents: [
            NewCustomerDialogComponent,
            EditCustomerDialogComponent,
          ]
        }
      })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // spyOn(component.newCustomerDialog, 'open').and.returnValue(mdDialogRef);
    // spyOn(component.editCustomerDialog, 'open').and.returnValue(mdDialogRef);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
