import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceListComponent } from './resource-list.component';
import { TableComponent } from '../table/table.component';
import { CardComponent } from '../card/card.component';
import { MdCardModule, MdPaginatorModule, MdSortModule, MdTableModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk';
import { Table } from '../table/Table';
import 'rxjs/Observable/of';
import { click, TestDataSource, TestResource } from '../../test-helper';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { Page } from '../../api.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorBoxComponent } from '../error-box/error-box.component';

describe('ResourceListComponent', () => {
  let component: ResourceListComponent<any>;
  let fixture: ComponentFixture<ResourceListComponent<any>>;

  let table: Table<TestResource>;
  let dataSource;
  const page = {pageSize: 1, length: 2, pageIndex: 0};

  table = new Table(['id', 'name'], [{id: 'id', text: 'ID'}, {id: 'name', text: 'Name'}], page);

  const selectRow = () => {
    const row = fixture.debugElement.query(By.css('md-row'));
    click(row);
    fixture.detectChanges();
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResourceListComponent, TableComponent, CardComponent, ErrorBoxComponent],
      imports: [
        NoopAnimationsModule,
        MdTableModule,
        CdkTableModule,
        MdSortModule,
        MdPaginatorModule,
        MdCardModule,
      ],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceListComponent);
    component = fixture.componentInstance;
    dataSource = new TestDataSource(component.tableComponent.sort, component.tableComponent.paginator);
    table = new Table(['id', 'name'],
      [{id: 'id', text: 'ID'},
        {
          id: 'name',
          text: 'Name',
          cellValue: (res: TestResource) => `${res.id} ${res.name}`,
          extraClasses: 'art-class'
        }], page);
    component.table = table;
    component.dataSource = dataSource;
    fixture.detectChanges();
    spyOn(dataSource, 'connect').and.returnValue(Observable.of<TestResource[]>([
      {id: 0, name: 'foo'},
      {id: 1, name: 'bar'},
    ]));
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  it('should display a table of resources', () => {
    const t = fixture.debugElement.query(By.css('art-table'));
    expect(t).toBeTruthy();
  });
  it('should define tableComponent', () => {
    expect(component.tableComponent).toBeTruthy();
  });
  it('should disable all buttons if no row is selected', () => {
    const buttons = fixture.debugElement.queryAll(By.css('.art-resource-list-toolbar button'));
    for (const button of buttons) {
      expect(button.nativeElement.disabled).toBeTruthy();
    }

    selectRow();
    for (const button of buttons) {
      expect(button.nativeElement.disabled).toBeFalsy();
    }
  });
  it('should send addToReceipt event when addToReceipt button is pressed', () => {
    let res: TestResource;
    component.addToReceipt.subscribe(r => res = r);
    selectRow();
    const button = fixture.debugElement.query(By.css('.art-resource-list-toolbar .art-add-to-receipt'));
    click(button);
    fixture.detectChanges();
    expect(res).toEqual({id: 0, name: 'foo'});
  });
  it('should send view event when view button is pressed', () => {
    let res: TestResource;
    component.view.subscribe(r => res = r);
    selectRow();
    const button = fixture.debugElement.query(By.css('.art-resource-list-toolbar .art-view'));
    click(button);
    fixture.detectChanges();
    expect(res).toEqual({id: 0, name: 'foo'});
  });
  it('should send edit event when edit button is pressed', () => {
    let res: TestResource;
    component.edit.subscribe(r => res = r);
    selectRow();
    const button = fixture.debugElement.query(By.css('.art-resource-list-toolbar .art-edit'));
    click(button);
    fixture.detectChanges();
    expect(res).toEqual({id: 0, name: 'foo'});
  });
  it('should send delete event when delete button is pressed', () => {
    let res: TestResource;
    component.delete.subscribe(r => res = r);
    selectRow();
    const button = fixture.debugElement.query(By.css('.art-resource-list-toolbar .art-delete'));
    click(button);
    fixture.detectChanges();
    expect(res).toEqual({id: 0, name: 'foo'});
  });
  it('should send rowSelection event when a row is selected', () => {
    let selectedRes: TestResource;
    component.rowSelection.subscribe(r => selectedRes = r);
    expect(selectedRes).toBeFalsy();
    selectRow();
    expect(selectedRes).toEqual({id: 0, name: 'foo'});
  });
  it('should send pagination event if click', () => {
    let page: Page;
    component.paginationChange.subscribe(p => page = p);
    const nextBtn = fixture.debugElement.query(By.css('.mat-paginator-navigation-next'));
    click(nextBtn);
    fixture.detectChanges();
    expect(page).toBeTruthy();
    expect(page).toEqual({pageIndex: 1, pageSize: 1, length: 2});
  });
});
