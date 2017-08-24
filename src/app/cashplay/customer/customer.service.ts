import { Injectable } from '@angular/core';
import { ApiService } from '../../api.service';
import { BaseResourceService } from '../../base-resource-service';

@Injectable()
export class CustomerService extends BaseResourceService {
  protected resource = 'customers';

  constructor(protected api: ApiService) {
    super(api);
  }
}
