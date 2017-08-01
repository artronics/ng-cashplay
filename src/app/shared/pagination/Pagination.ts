import { Table } from '../table/Table';
export class Pagination<T> {
  table: Table<T>;


  constructor(table: Table<T>) {
    this.table = table;
  }
}
