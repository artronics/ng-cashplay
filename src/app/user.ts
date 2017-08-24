import { BaseResource, BaseResourceData } from './base-resource';

export interface UserData extends BaseResourceData {
  name: string;
  email: string;
}

export class User extends BaseResource implements UserData {
  name = '';
  email = '';
}
