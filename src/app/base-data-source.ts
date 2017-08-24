import { CollectionViewer, DataSource } from '@angular/cdk';
import { MdPaginator, MdSort } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Page } from './api.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export abstract class BaseDataSource<T> implements DataSource<T> {
  protected displayDataChanges: any[] = [
    this.paginator.page,
    this.sort.mdSortChange,
  ];

  page: BehaviorSubject<Page> = new BehaviorSubject<Page>({
    pageSize: 1,
    pageIndex: 0,
    length: 2,
  });

  abstract get data(): T[];

  constructor(protected sort: MdSort, protected paginator: MdPaginator) {
    this.page.subscribe(p => {
      this.paginator.pageIndex = p.pageIndex;
      this.paginator.length = p.length;
      this.paginator.pageSize = p.pageSize;
    });
  }

  connect(collectionViewer: CollectionViewer): Observable<T[]> {
    return Observable.merge(...this.displayDataChanges).map(() => {
      const data = this.getSortedData();

      return data;
    });
  }

  disconnect(collectionViewer: CollectionViewer): void {
  }

  protected abstract getSortedData(): T[];

  changePageSize(size: number) {
    const currentPage = this.page.value;
    currentPage.pageSize = size;
    this.nextPage(currentPage);
  }

  changePageLength(length: number) {
    const currentPage = this.page.value;
    currentPage.length = length;
    this.nextPage(currentPage);
  }

  nextPage(page: Page) {
    this.page.next({...page});
  }
}
