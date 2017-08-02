import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export class Table<T> {
  headers: TableHeader<T>[];
  resources: Observable<T[]>;

  constructor(headers: TableHeader<T>[], resources: Observable<T[]>) {
    this.headers = headers;
    this.resources = resources;
  }

}
export interface TableHeader<T> {
  text: string;
  fn(res: T): string;
}

export let TABLE_HEADERS = new InjectionToken<TableHeader<any>[]>('table.headers');
