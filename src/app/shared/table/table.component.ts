import { Component, Input, OnInit } from '@angular/core';
import { Table } from './Table';

@Component({
  selector: 'art-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<T> implements OnInit {
  @Input() table: Table<T>;

  constructor() {
  }

  ngOnInit() {
  }

  rows() {
    return Table.rows(this.table);
  }
}
