import { BaseResourceComponent } from '../../base-resource-component';
import { Item } from './item';
import { Column } from '../../shared/table/Table';

export abstract class BaseItemComponent extends BaseResourceComponent<Item> {
  static columns: Column<Item>[] = [
    {id: 'id', text: 'ID'},
    {id: 'model', text: 'Model'},
  ];

  static displayedColumns: string[] = ['id', 'model'];
}
