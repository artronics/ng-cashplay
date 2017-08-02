import { Component, Input, OnInit } from '@angular/core';
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
export class PaginationComponent<T> implements OnInit {

  @Input() title: string;
  @Input() pagination: Pagination<T>;

  currentPage = 1;
  totalPages: number;

  page = new Subject<number>();

  constructor() {
  }

  ngOnInit() {
    this.totalPages = this.pagination.totalPages();

    this.pagination.table.resources = this.page.switchMap(page => page ?
      this.pagination.paginator.goToPage(page) : this.pagination.paginator.goToPage(1)
    ).catch(error => {
      console.log(error);
      return Observable.of<T[]>([]);
    });
  }

  onNext() {
    this.page.next(this.currentPage++);
  }

  onPrevious() {
    this.page.next(this.currentPage--);
  }
}
