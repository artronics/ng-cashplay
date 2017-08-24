import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCustomerFormComponent } from './new-customer-form.component';
import { MdInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('NewCustomerFormComponent', () => {
  let component: NewCustomerFormComponent;
  let fixture: ComponentFixture<NewCustomerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewCustomerFormComponent],
      imports: [MdInputModule, FormsModule, BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCustomerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
