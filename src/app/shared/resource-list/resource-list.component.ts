import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Table } from '../table/Table';
import { Page } from '../../api.service';
import { TableComponent } from '../table/table.component';
import { DataSource } from '@angular/cdk';

@Component({
  selector: 'art-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.scss']
})
export class ResourceListComponent<T> implements OnInit {
  @Input() title: string;
  @Input() table: Table<T>;
  @Input() dataSource: DataSource<T>;
  @Input() errorMsg: string;

  @Output() edit: EventEmitter<T> = new EventEmitter<T>();
  @Output() view: EventEmitter<T> = new EventEmitter<T>();
  @Output() delete: EventEmitter<T> = new EventEmitter<T>();
  @Output() addToReceipt: EventEmitter<T> = new EventEmitter<T>();

  @Output() refresh: EventEmitter<any> = new EventEmitter();

  @Output() rowSelection: EventEmitter<T> = new EventEmitter<T>();
  @Output() paginationChange: EventEmitter<Page> = new EventEmitter<Page>();

  selectedRow: T;

  @ViewChild(TableComponent)
  tableComponent;

  constructor() {
  }

  ngOnInit() {
  }

  disabled() {
    return !this.selectedRow;
  }
  onRowSelection(row: T) {
    this.selectedRow = row;
    this.rowSelection.emit(row);
  }

  onRefresh() {
    this.refresh.emit();
  }

  onAddToReceipt() {
    this.addToReceipt.emit(this.selectedRow);
  }

  onView() {
    this.view.emit(this.selectedRow);
  }
  onEdit() {
    this.edit.emit(this.selectedRow);
  }

  onDelete() {
    this.delete.emit(this.selectedRow);
  }

  onPaginationChange(page: Page) {
    this.paginationChange.emit(page);
  }

}
