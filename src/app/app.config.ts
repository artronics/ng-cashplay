import { InjectionToken } from '@angular/core';

export interface AppConfig {
  apiUrl: string;
}

export const CASHPLAY_CONFIG: AppConfig = {
  apiUrl: 'http://localhost:8000/api/'
};

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

