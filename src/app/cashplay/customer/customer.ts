import { CustomerData } from './base-customer-data-source';
import { BaseResource } from '../../base-resource';

export class Customer extends BaseResource implements CustomerData {
  firstName = '';
  lastName = '';
  image = '';

  static Sort(a: Customer, b: Customer, property: string, direction?): number {
    const result = BaseResource.Sort(a, b, property, direction);
    if (result !== 0) {
      return result;
    }

    let propertyA: number | string | Date = '';
    let propertyB: number | string | Date = '';

    switch (property) {
      case 'name':
        [propertyA, propertyB] = [`${a.firstName} ${a.lastName}`, `${b.firstName} ${b.lastName}`];
        break;
      case 'firstName':
        [propertyA, propertyB] = [a.firstName, b.firstName];
        break;
      case 'lastName':
        [propertyA, propertyB] = [a.lastName, b.lastName];
        break;
    }

    const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
    const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

    return (valueA < valueB ? -1 : 1) * (direction === 'asc' ? 1 : -1);
  }
}
