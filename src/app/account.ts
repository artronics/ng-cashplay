import { User } from './user';
import { BaseResource, BaseResourceData } from './base-resource';

export interface AccountData extends BaseResourceData {
  name: string;
  users: User[];
}

export class Account extends BaseResource implements AccountData {
  name = '';
  users = [];
}

