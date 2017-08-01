export class Table<T> {
  headers: string[];
  resources: T[];


  constructor(headers: string[], resources: T[]) {
    this.headers = headers;
    this.resources = resources;
  }
}
