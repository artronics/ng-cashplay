import { CASHPLAY_CONFIG } from '../../AppConfig';
import { Page } from '../../api.service';

export class Table<T> {
  displayedColumns: string[];
  columns: Column<T>[];
  page: Page;
  pageSizeOptions?: number[];


  constructor(displayedColumns: string[],
              columns: Column<T>[],
              page: Page,
              pageSizeOptions?: number[]) {
    this.displayedColumns = displayedColumns;
    this.columns = columns;
    this.page = page;
    pageSizeOptions
      ? this.pageSizeOptions = pageSizeOptions
      : this.pageSizeOptions = CASHPLAY_CONFIG.pageSizeOptions;
  }
}

export interface Column<T> {
  id: string;
  text: string;
  extraClasses?: string[] | string;
  // FIXME conditional attributes does not work for md-sort-header: [attr.md-sort-header]="column.id"
  sort?: boolean;
  // FIXME don't know how to apply it and also not sure about 'start'
  sortStart?: 'asc' | 'dsc' | 'start';

  cellValue?(row: T): any | string | number | Date;

}
