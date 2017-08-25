import { Injectable } from '@angular/core';
import { BaseResourceService } from '../../base-resource-service';
import { ApiService } from '../../api.service';

@Injectable()
export class ItemService extends BaseResourceService {
  protected resource = 'items';
  protected createResourceUrl = '';

  constructor(protected api: ApiService) {
    super(api);
    this.createResourceUrl = `account/${this.api.account.id}/items?userId=${this.api.account.loggedInUser.id}`;
  }
}
