import { Component, Input, OnInit } from '@angular/core';
import { Table } from '../table/Table';
import { Pagination } from '../pagination/Pagination';

@Component({
  selector: 'art-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.scss']
})
export class ResourceListComponent<T> implements OnInit {
  @Input() title: string;
  @Input() pagination: Pagination<T>;

  constructor() { }

  ngOnInit() {
  }

}
