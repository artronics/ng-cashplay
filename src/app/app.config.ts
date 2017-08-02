import { InjectionToken } from '@angular/core';

export interface AppConfig {
  baseUrl: string;
  defaultResourcesPerPage: number;
}

export const CASHPLAY_CONFIG: AppConfig = {
  baseUrl: 'http://localhost:8000/api/',
  defaultResourcesPerPage: 10,
};

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

