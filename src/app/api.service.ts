import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG } from './AppConfig';
import { Observable } from 'rxjs/Observable';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/toPromise';
import { MdSnackBar } from '@angular/material';

export type Query = string;

export interface Page {
  /** The current page index. */
  pageIndex: number;
  /** The current page size */
  pageSize: number;
  /** The current total number of items being paged */
  length?: number;
}

export interface IPaginatedResource<T> {
  page: {
    size: number
    totalElements: number;
    totalPages: number;
    number: number;
  };
  _embedded: { [key: string]: T };
}

export class PaginatedResource<T> implements IPaginatedResource<T> {
  page = {
    size: 0,
    totalElements: 0,
    totalPages: 0,
    number: 0,
  };
  _embedded: { [key: string]: T };

  constructor(_embedded: { [key: string]: T }) {
    this._embedded = _embedded;
  }
}

export interface CreatedAt {
  createdAt: Date;
}

export interface UpdatedAt {
  updatedAt: Date;
}

function instanceofCreatedAt(object: any): object is CreatedAt {
  return 'createdAt' in object;
}

function instanceofUpdatedAt(object: any): object is UpdatedAt {
  return 'updatedAt' in object;
}

@Injectable()
export class ApiService {
  public token: string;

  private reqOpts: RequestOptions = new RequestOptions();

  // FIXME using appConfig: AppConfig throws warning which says can not find type AppConfig!
  constructor(@Inject(APP_CONFIG) private appConfig,
              private http: Http,
  public snackBar: MdSnackBar) {

    const headers = new Headers();
    headers.append('Content-Type', 'Application/json');
    this.token = window.localStorage.getItem('token');
    headers.append('Authorization', <string>this.token);
    this.reqOpts = new RequestOptions({headers: headers});
  }

  get <T>(url: string, page?: Page, q?: Query): Observable<any> {
    if (page) {
      url = this.addPagination(url, page);
    }
    if (q) {
      url = this.addQuery(url, q);
    }
    return this.http
      .get(`${this.appConfig.baseUrl + url}`, this.reqOpts)
      .map(response => {
        const data = response.json() as T;
        return data;
      });
  }

  post<T> (url: string, body: T): Observable<T> {
    if (instanceofCreatedAt(body)) {
      body = this.addCreatedAt(body);
    }

    return this.http
      .post(`${this.appConfig.baseUrl + url}`, JSON.stringify(body), this.reqOpts)
      .map(response => response.json() as T)
      .catch(err => this.handleError(err));
  }

  put<T>(url: string, body: T): Observable<T> {
    if (instanceofUpdatedAt(body)) {
      body = this.addUpdatedAt(body);
    }

    return this.http
      .put(`${this.appConfig.baseUrl + url}/${body['id']}`, JSON.stringify(body), this.reqOpts)
      .delay(1000)
      .map(response => response.json() as T)
      .catch(err => this.handleError(err));
  }

  addPagination(url: string, page: Page): string {
    return `${url}?page=${page.pageIndex}&size=${page.pageSize}`;

  }

  addQuery(url: string, q: Query): string {
    return `${url}?q=${q}`;
  }

  addCreatedAt<T extends CreatedAt>(res: T): T {
    res.createdAt = new Date(Date.now());
    return res;
  }

  addUpdatedAt<T extends UpdatedAt>(res: T): T {
    res.updatedAt = new Date(Date.now());
    return res;
  }

  handleError<T>(error): Observable<T> {
    console.error('error occurred in http', error);
    const ref = this.snackBar.open('An error occurred. Make sure you are connected to the Internet!',
      'dismiss',
      {extraClasses: ['art-snack-error']});
    // return Observable.of<T>();
    ref.onAction().subscribe(() => ref.dismiss());
    return error;
  }
}
