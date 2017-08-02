import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG } from './app.config';

@Injectable()
export class ApiService {

  // FIXME using appConfig: AppConfig throws warning which says can not find type AppConfig!
  constructor(@Inject(APP_CONFIG) private appConfig) {
  }
}
