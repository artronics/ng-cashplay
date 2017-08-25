import { ApiService, IPaginatedResource, Page, Query } from './api.service';
import { Observable } from 'rxjs/Observable';

export abstract class BaseResourceService {
  protected api: ApiService;
  protected abstract resource: string;
  protected abstract createResourceUrl: string;

  constructor(api: ApiService) {
    this.api = api;
  }

  search<T>(q: Query, page?: Page): Observable<IPaginatedResource<T[]>> {
    return this.api.get<T>(this.resource, page, null, q);
  }

  recentlyAdded<T>(page: Page): Observable<IPaginatedResource<T[]>> {
    return this.api.get<IPaginatedResource<T[]>>(this.resource, page, {propertyName: 'updatedAt', direction: 'desc'});
  }

  create<T>(customer: T): Observable<T> {
    return this.api.post<T>(this.createResourceUrl, customer);
  }

  update<T>(customer: T): Observable<T> {
    return this.api.put<T>(this.resource, customer);
  }
}
