export interface BaseResourceData {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export abstract class BaseResource implements BaseResourceData {
  id = 0;
  createdAt = null;
  updatedAt = null;

  static Sort(a: BaseResource, b: BaseResource, property: string, direction?: 'asc' | 'desc' | ''): number {
    let propertyA: number | string | Date = '';
    let propertyB: number | string | Date = '';

    switch (property) {
      case 'id':
        [propertyA, propertyB] = [a.id, b.id];
        break;
      case 'createdAt':
        [propertyA, propertyB] = [a.createdAt, b.createdAt];
        break;
      case 'updatedAt':
        [propertyA, propertyB] = [a.createdAt, b.createdAt];
        break;
      // if no match return 0 so override method can proceed
      default:
        return 0;
    }
    const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
    const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

    return (valueA < valueB ? -1 : 1) * (direction === 'asc' ? 1 : -1);
  }
}
