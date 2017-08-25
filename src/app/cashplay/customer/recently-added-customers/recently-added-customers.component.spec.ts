import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyAddedCustomersComponent } from './recently-added-customers.component';
import { CustomerService } from '../customer.service';
import { SharedModule } from '../../../shared/shared.module';
import { APP_CONFIG, CASHPLAY_CONFIG } from '../../../AppConfig';
import { Table } from '../../../shared/table/Table';
import { Customer } from '../customer';
import { BaseCustomerComponent } from '../base-customer-component';
import { RecentlyAddedCustomersDataSource } from './recently-added-customers-data-source';
import { Observable } from 'rxjs/Observable';
import { IPaginatedResource, Page, PaginatedResource } from '../../../api.service';
import 'rxjs/observable/of';
import { By } from '@angular/platform-browser';

describe('RecentlyAddedCustomersComponent', () => {
  let component: RecentlyAddedCustomersComponent;
  let fixture: ComponentFixture<RecentlyAddedCustomersComponent>;
  let table: Table<Customer>;
  let customerServiceStub: CustomerService = new CustomerService(null);
  let dataSource: RecentlyAddedCustomersDataSource;
  const page: Page = {
    pageIndex: 0,
    pageSize: 1,
    length: 2,
  };
  const customers: Customer[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      createdAt: new Date(Date.now()),
      updatedAt: null
    }, {
      id: 2,
      firstName: 'Jalal',
      lastName: 'Hosseini',
      createdAt: new Date(Date.now()),
      updatedAt: null
    }
  ];

  beforeEach(async(() => {
    const paginatedResource = new PaginatedResource({customers: customers});
    paginatedResource.page.totalElements = 2;
    spyOn(customerServiceStub, 'recentlyAdded').and.callThrough().and.returnValue(
      Observable.of<IPaginatedResource<Customer[]>>(paginatedResource));
    TestBed.configureTestingModule({
      declarations: [RecentlyAddedCustomersComponent],
      providers: [
        {provide: CustomerService, useValue: customerServiceStub},
        {provide: APP_CONFIG, useValue: CASHPLAY_CONFIG}
      ],
      imports: [SharedModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentlyAddedCustomersComponent);
    component = fixture.componentInstance;
    customerServiceStub = TestBed.get(CustomerService);
    dataSource = new RecentlyAddedCustomersDataSource(
      customerServiceStub,
      component.resourceListComponent.tableComponent.sort,
      component.resourceListComponent.tableComponent.paginator,
      CASHPLAY_CONFIG);
    table = new Table<Customer>(BaseCustomerComponent.displayedColumns, BaseCustomerComponent.columns, page);

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  it('should call for the recently added customers on init', () => {
    fixture.detectChanges();
    const t = fixture.debugElement.queryAll(By.css('md-row'));
    expect(t.length).toEqual(2);
    expect(customerServiceStub.recentlyAdded).toHaveBeenCalled();
  });
});
