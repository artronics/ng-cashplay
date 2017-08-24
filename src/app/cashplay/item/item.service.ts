import { Injectable } from '@angular/core';
import { BaseResourceService } from '../../base-resource-service';
import { ApiService } from '../../api.service';

@Injectable()
export class ItemService extends BaseResourceService {
  protected resource = 'items';

  constructor(protected api: ApiService) {
    super(api);
  }
}
