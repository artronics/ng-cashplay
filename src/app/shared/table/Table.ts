import { InjectionToken } from '@angular/core';

export class Table<T> {
  headers: TableHeader<T>[];
  resources: T[];

  constructor(headers: TableHeader<T>[], resources: T[]) {
    this.headers = headers;
    this.resources = resources;
  }

  // FiXME why it is called 16 times for 2x2 table??
  static rows<T>(table: Table<T>): string[][] {
    const rows: string[][] = [];

    table.resources.forEach(res => {
      const cells = [];
      for (let i = 0; i < table.headers.length; i++) {
        const cell = table.headers[i].fn(res);
        if (cell === '') {
          cells.push('---');
        } else {
          cells.push(cell);
        }
      }
      rows.push(cells);
    });

    return rows;
  }
}
export interface TableHeader<T> {
  text: string;
  fn(res: T): string;
}

export let TABLE_HEADERS = new InjectionToken<TableHeader<any>[]>('table.headers');
