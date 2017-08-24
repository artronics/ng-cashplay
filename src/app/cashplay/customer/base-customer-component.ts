import { Column } from '../../shared/table/Table';
import { Customer } from './customer';
import { BaseResourceComponent } from '../../base-resource-component';

export abstract class BaseCustomerComponent extends BaseResourceComponent<Customer> {
  static columns: Column<Customer>[] = [
    {id: 'id', text: 'ID'},
    {
      id: 'name',
      text: 'Name',
      cellValue: (c) => `${c.firstName} ${c.lastName}`,
      extraClasses: 'art-capitalize',
      sortStart: 'asc'
    },
    {id: 'createdAt', text: 'Created At'},
  ];
  static displayedColumns = ['id', 'name', 'createdAt'];
}
