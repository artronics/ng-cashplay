import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { MdPaginatorModule, MdSortModule, MdTableModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk';
import { Table } from './Table';
import 'rxjs/Observable/of';
import { click, TestDataSource, TestResource } from '../../test-helper';
import { Observable } from 'rxjs/Observable';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Page } from '../../api.service';

describe('TableComponent', () => {
  let component: TableComponent<any>;
  let fixture: ComponentFixture<any>;
  let table: Table<TestResource>;
  let dataSource;
  const page: Page = {pageSize: 1, length: 2, pageIndex: 0};


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MdTableModule,
        CdkTableModule,
        MdSortModule,
        MdPaginatorModule,
      ],
      declarations: [TableComponent]
    });
    // .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    dataSource = new TestDataSource(component.sort, component.paginator);
    table = new Table(['id', 'name'],
      [{id: 'id', text: 'ID'},
        {
          id: 'name',
          text: 'Name',
          cellValue: (res: TestResource) => `${res.id} ${res.name}`,
          extraClasses: 'art-class'
        }],
      page);
    component.table = table;
    component.dataSource = dataSource;
    fixture.detectChanges();

  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  it('should be create MdSort and MdPagination', () => {
    expect(component.paginator).toBeTruthy();
    expect(component.sort).toBeTruthy();
  });
  it('should display data', () => {
    spyOn(dataSource, 'connect').and.returnValue(Observable.of<TestResource[]>([{id: 0, name: 'foo'}]));
    fixture.detectChanges();
    const cells = fixture.debugElement.queryAll(By.css('md-cell'));
    expect(cells.length).toBe(2);
  });
  it('should display cell value if a function is provided for cellValue', () => {
    spyOn(dataSource, 'connect').and.returnValue(Observable.of<TestResource[]>([
      {id: 0, name: 'foo'},
      {id: 1, name: 'bar'},
    ]));
    fixture.detectChanges();
    const cells = fixture.debugElement.queryAll(By.css('md-cell'));
    expect(cells[1].nativeElement.textContent).toContain('0 foo');
  });
  it('should add extraClasses to cell if available', () => {
    spyOn(dataSource, 'connect').and.returnValue(Observable.of<TestResource[]>([
      {id: 0, name: 'foo'},
      {id: 1, name: 'bar'},
    ]));
    fixture.detectChanges();
    const cells = fixture.debugElement.queryAll(By.css('.art-class'));
    expect(cells.length).toBe(2);
  });
  it('should hide paginator when pagination object is not defined', () => {
    table.page = null;
    fixture.detectChanges();
    const pag = fixture.debugElement.query(By.css('.hide'));
    expect(pag).toBeTruthy();
  });
  it('should hide paginator when length is equal or less than pageSize', () => {
    table.page = {pageSize: 2, length: 2, pageIndex: 0};
    table.pageSizeOptions = [10];
    spyOn(dataSource, 'connect').and.returnValue(Observable.of<TestResource[]>([
      {id: 0, name: 'foo'},
      {id: 1, name: 'bar'},
    ]));
    fixture.detectChanges();
    let pag = fixture.debugElement.query(By.css('.hide'));
    expect(pag).toBeTruthy();

    table.page = {pageSize: 1, length: 2, pageIndex: 0};
    fixture.detectChanges();
    pag = fixture.debugElement.query(By.css('.hide'));
    expect(pag).toBeFalsy();
  });
  it('should send event for pagination buttons', () => {
    let page: Page;
    component.page.subscribe(p => page = p);
    table.page = {pageSize: 1, length: 2, pageIndex: 0};
    table.pageSizeOptions = [1];
    spyOn(dataSource, 'connect').and.returnValue(Observable.of<TestResource[]>([
      {id: 0, name: 'foo'},
      {id: 1, name: 'bar'},
    ]));
    fixture.detectChanges();
    const nextBtn = fixture.debugElement.query(By.css('.mat-paginator-navigation-next'));
    click(nextBtn);
    fixture.detectChanges();
    expect(page).toBeTruthy();
    expect(page).toEqual({pageIndex: 1, pageSize: 1, length: 2});
  });
  it('should put .art-table-row-selected class to selected row', () => {
    spyOn(dataSource, 'connect').and.returnValue(Observable.of<TestResource[]>([
      {id: 0, name: 'foo'},
      {id: 1, name: 'bar'},
    ]));
    fixture.detectChanges();
    let row = fixture.debugElement.query(By.css('.art-table-row-selected'));
    expect(row).toBeFalsy();

    const selectedRow = fixture.debugElement.query(By.css('md-row'));
    click(selectedRow);
    fixture.detectChanges();
    row = fixture.debugElement.query(By.css('.art-table-row-selected'));
    expect(row).toBeTruthy();
  });
  it('should send the selected row resource as event', () => {
    let selectedRes: TestResource;
    component.rowSelected.subscribe(res => selectedRes = res);
    const expectedRes = {id: 0, name: 'foo'};
    spyOn(dataSource, 'connect').and.returnValue(Observable.of<TestResource[]>([
      expectedRes,
      {id: 1, name: 'bar'},
    ]));
    fixture.detectChanges();
    expect(selectedRes).toBeFalsy();
    const row = fixture.debugElement.query(By.css('md-row'));
    click(row);
    fixture.detectChanges();
    expect(selectedRes).toBe(expectedRes);
  });
});
