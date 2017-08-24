import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Table } from './Table';
import { MdPaginator, MdSort, PageEvent } from '@angular/material';
import { DataSource } from '@angular/cdk';

@Component({
  selector: 'art-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<T> implements OnInit {
  @Input() table: Table<T>;
  @Input() dataSource: DataSource<T>;
  @Output() rowSelected: EventEmitter<T> = new EventEmitter<T>();
  @Output() page: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  selectedRow: T;

  @ViewChild(MdSort)
  sort: MdSort;
  @ViewChild(MdPaginator)
  paginator: MdPaginator;

  constructor() { }

  ngOnInit() {
  }

  selectRow(row: T) {
    this.selectedRow = row;
    this.rowSelected.emit(row);
  }

  isSelectedRow() {
    return this.selectedRow;
  }

  onPaginationChange(page: PageEvent) {
    this.page.emit(page);
  }
}
