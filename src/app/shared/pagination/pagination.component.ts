import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Pagination } from './Pagination';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'art-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent<T> implements OnInit, AfterViewInit {

  @Input() title: string;
  @Input() pagination: Pagination<T>;

  currentPage = 1;
  totalPages: number;

  private page = new Subject<number>();
  foo: Observable<T[]>;
  constructor() {
  }

  ngOnInit() {
    this.totalPages = this.pagination.totalPages();
    this.pagination.table.resources = this.page.switchMap(page => {
        return page ?
          this.pagination.paginator.goToPage(page) : this.pagination.paginator.goToPage(1);
      }
    ).catch(error => {
      console.log(error);
      return Observable.of<T[]>([]);
    });
  }

  // FIXME it causes child component (Table) to throw error.
  ngAfterViewInit() {
    // console.log(this.pagination.table);
    this.page.next(this.currentPage);
  }
  onNext() {
    console.log(this.pagination.table.resources);
    this.currentPage += 1;
    this.page.next(this.currentPage);
  }

  onPrevious() {
    this.currentPage -= 1;
    this.page.next(this.currentPage);
  }
}
