export class Table<T> {
  headers: TableHeader[];
  resources: T[];

  constructor(headers: TableHeader[], resources: T[]) {
    this.headers = headers;
    this.resources = resources;
  }

  // FiXME why it is called 16 times for 2x2 table??
  static rows<T>(table: Table<T>): string[][] {
    const rows: string[][] = [[]];

    table.resources.forEach(res => {
      const cells = [];
      for (let i = 0; i < table.headers.length; i++) {
        if (res[table.headers[i].name]) {
          cells.push(res[table.headers[i].name]);
        } else {
          cells.push('---');
        }
      }
      rows.push(cells);
    });

    return rows;
  }
}
export interface TableHeader {
  name: string;
  text: string;
}
