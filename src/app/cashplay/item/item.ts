import { BaseResource, BaseResourceData } from '../../base-resource';

export interface ItemData extends BaseResourceData {
  model: string;
}

export class Item extends BaseResource implements ItemData {
  model: '';

  static Sort(a: Item, b: Item, property: string, direction?): number {
    const result = BaseResource.Sort(a, b, property, direction);
    if (result !== 0) {
      return result;
    }

    let propertyA: number | string | Date = '';
    let propertyB: number | string | Date = '';

    switch (property) {
      case 'model':
        [propertyA, propertyB] = [a.model, b.model];
        break;
    }

    const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
    const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

    return (valueA < valueB ? -1 : 1) * (direction === 'asc' ? 1 : -1);
  }
}
