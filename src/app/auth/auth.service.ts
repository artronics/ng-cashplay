import { Inject, Injectable } from '@angular/core';
import { Credentials } from './Credentials';
import { Http, Response } from '@angular/http';
import { APP_CONFIG } from '../AppConfig';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';
import { Account } from '../account';
import { Observable } from 'rxjs/Observable';
import { MdSnackBar } from '@angular/material';

@Injectable()
export class AuthService {

  constructor(@Inject(APP_CONFIG) private appConfig,
              private http: Http, private router: Router,
              public snackBar: MdSnackBar) {
  }

  login(cred: Credentials): Observable<Response> {
    return this.http.post(`${this.appConfig.baseUrl}login`, JSON.stringify(cred))
      .do(res => {
        const token = res.headers.get('authorization');
        if (!token || token === '') {
          console.log('no token in header');
          throw new Error('no authorization header present');
        }
        window.localStorage.setItem('token', token);

        const account: Account = res.json() as Account;
        if (account) {
          account.loggedInUser = account.users.filter(u => u.email === cred.email)[0];
          window.localStorage.setItem('account', JSON.stringify(account));
        }

        this.router.navigate(['app/customer']);

        return res;
      })
      // .map(res => Observable.of<Response>(res))
      .catch(err => {
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('account');
        // if authentication failed then login component handle this error
        // otherwise it means something is wrong with server, etc
        if (err.status !== 401) {
          console.error('error occurred in http', err);
          const ref = this.snackBar.open('An error occurred. Make sure you are connected to the Internet!',
            'dismiss',
            {extraClasses: ['art-snack-error']});
          // return Observable.of<T>();
          ref.onAction().subscribe(() => ref.dismiss());
        }
        throw err;
      });

  }
}
