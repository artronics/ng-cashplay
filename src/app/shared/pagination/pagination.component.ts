import { Component, OnInit, Input } from '@angular/core';
import { Pagination } from './Pagination';

@Component({
  selector: 'art-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent<T> implements OnInit {

  @Input() title: string;
  @Input() pagination: Pagination<T>;

  constructor() { }

  ngOnInit() {
  }

}
