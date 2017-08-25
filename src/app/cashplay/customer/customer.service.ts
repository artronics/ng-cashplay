import { Injectable } from '@angular/core';
import { ApiService } from '../../api.service';
import { BaseResourceService } from '../../base-resource-service';

@Injectable()
export class CustomerService extends BaseResourceService {
  protected resource = 'customers';
  protected createResourceUrl = '';

  constructor(protected api: ApiService) {
    super(api);
    this.createResourceUrl = `account/${this.api.account.id}/customers?userId=${this.api.account.loggedInUser.id}`;
  }
}
