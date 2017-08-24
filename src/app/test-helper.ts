import { CollectionViewer } from '@angular/cdk';
import { Observable } from 'rxjs/Observable';
import 'rxjs/observable/of';
import { BaseDataSource } from './base-data-source';
import { MdPaginator, MdSort } from '@angular/material';
import { DebugElement } from '@angular/core';

export interface TestResource {
  id: number;
  name: string;
}

/** Button events to pass to `DebugElement.triggerEventHandler` for RouterLink event handler */
export const ButtonClickEvents = {
  left: {button: 0},
  right: {button: 2}
};

/** Simulate element click. Defaults to mouse left-button click event. */
export function click(el: DebugElement | HTMLElement, eventObj: any = ButtonClickEvents.left): void {
  if (el instanceof HTMLElement) {
    el.click();
  } else {
    el.triggerEventHandler('click', eventObj);
  }
}

export class TestDataSource extends BaseDataSource<TestResource> {

  get data(): TestResource[] {
    return null;
  }

  protected getSortedData(): TestResource[] {
    return null;
  }

  constructor(sort: MdSort, paginator: MdPaginator) {
    super(sort, paginator);
  }

  connect(collectionViewer: CollectionViewer): Observable<TestResource[]> {
    // return Observable.of<TestResource[]>([{id: 0, name: 'jalal'}]);
    return Observable.of<TestResource[]>([]);
  }

  disconnect(collectionViewer: CollectionViewer): void {
  }
}
