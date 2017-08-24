import { InjectionToken } from '@angular/core';

export interface AppConfig {
  baseUrl: string;
  pageSizeOptions: number[];
  defaultResourcesPerPage: number;
  recentlyAddedCustomersPerPage: number;
  searchResultsPerPage: number;
}

export const CASHPLAY_CONFIG: AppConfig = {
  baseUrl: 'http://localhost:8080/api/',
  pageSizeOptions: [1, 2, 3, 5, 10],
  defaultResourcesPerPage: 10,
  recentlyAddedCustomersPerPage: 3,
  searchResultsPerPage: 2,
};

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

