import { OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material';
import { ResourceListComponent } from './shared/resource-list/resource-list.component';
import { Table } from './shared/table/Table';
import { BaseDataSource } from './base-data-source';

export abstract class BaseResourceComponent<T> implements OnInit {
  selectedResource: T;

  abstract dataSource: BaseDataSource<T>;
  abstract table: Table<T>;

  @ViewChild(ResourceListComponent)
  resourceListComponent;

  ngOnInit(): void {
    this.connectDataSource();

    this.dataSource.page.subscribe(p => {
      this.table.page = p;
    });
  }

  protected abstract connectDataSource();


  selectRow(row: T) {
    this.selectedResource = row;
  }

  selectedRow() {
    return this.selectedResource;
  }

  onPaginationChange(page: PageEvent) {
    // const newPage: Page = {pageSize: page.pageSize, pageIndex: page.pageIndex, length: page.length};
    // this.dataSource.page.next(newPage);
    this.selectedResource = null;
  }
}
