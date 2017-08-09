import { Component, Input, OnInit } from '@angular/core';
import { Table } from '../table/Table';
import { Pagination } from '../pagination/Pagination';
import { Resource } from './Resource';

@Component({
  selector: 'art-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.scss']
})
export class ResourceListComponent<T> implements OnInit {

  @Input() title: string;
  @Input() resource: Resource<T>;
  @Input() pagination: Pagination<T>;

  constructor() { }

  ngOnInit() {
  }

}
