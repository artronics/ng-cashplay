import { Observable } from 'rxjs/Observable';

export interface Pagable<T> {
  resourcesPerPage: number;
  goToPage(page: number): Observable<T[]>;
  first(): Observable<T[]>;
  next(): Observable<T[]>;

}
