import { CollectionViewer, DataSource } from '@angular/cdk';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ColumnDefs } from '../table/Table';

export abstract class Resource<T> implements DataSource<T> {
  abstract displayedColumns: string[];
  abstract dataChange: BehaviorSubject<T[]>;
  abstract columns: ColumnDefs<T>;

  get data(): T[] { return this.dataChange.value; }

  connect(collectionViewer: CollectionViewer): Observable<T[]> {
    return this.dataChange;
  }

  abstract disconnect(collectionViewer: CollectionViewer): void;
}
