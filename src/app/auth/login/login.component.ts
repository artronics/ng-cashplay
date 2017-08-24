import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { Credentials } from '../Credentials';

@Component({
  selector: 'art-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials: Credentials = {password: '', email: ''};
  authFailed = false;

  @ViewChild('loginForm')
  private form;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {

  }

  onLogin() {
    if (this.form.valid) {
      const response = this.authService.login(this.credentials);

      response.subscribe(res => {
      }, error2 => {
        if (error2.status === 401) {
          this.authFailed = true;
        }
      });

      return;
    }
  }

}
