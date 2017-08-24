import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSearchComponent } from './customer-search.component';
import { CustomerService } from '../customer.service';
import { customerServiceStub } from '../customer-test';
import { SharedModule } from '../../../shared/shared.module';
import { MdButtonModule, MdInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { APP_CONFIG, CASHPLAY_CONFIG } from '../../../AppConfig';

describe('CustomerSearchComponent', () => {
  let component: CustomerSearchComponent;
  let fixture: ComponentFixture<CustomerSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerSearchComponent],
      providers: [
        {provide: CustomerService, useValue: customerServiceStub},
        {provide: APP_CONFIG, useValue: CASHPLAY_CONFIG},
      ],
      imports: [
        SharedModule,
        FormsModule,
        MdInputModule,
        MdButtonModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
