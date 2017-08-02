import { Observable } from 'rxjs/Observable';

export interface Repository<T> {
  all(): Observable<T[]>;
}
