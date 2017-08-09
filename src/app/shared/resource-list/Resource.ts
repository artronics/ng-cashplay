import { CollectionViewer, DataSource } from '@angular/cdk';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export abstract class Resource<T> implements DataSource<T> {
  abstract displayedColumns: string[];
  abstract dataChange: BehaviorSubject<T[]>;

  get data(): T[] { return this.dataChange.value; }

  connect(collectionViewer: CollectionViewer): Observable<T[]> {
    return this.dataChange;
  }

  abstract disconnect(collectionViewer: CollectionViewer): void;
}
