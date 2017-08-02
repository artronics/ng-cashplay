import { Table } from '../table/Table';
import { Pagable } from '../Pagable';

export class Pagination<T> {
  paginator: Pagable<T>;
  table: Table<T>;

  constructor(paginator: Pagable<T>, table: Table<T>) {
    this.table = table;
    this.paginator = paginator;
    // this.table.resources = this.paginator.first();
  }

  totalPages() {
    return 3;
  }

  next() {
    this.table.resources = this.paginator.next();
  }
}
