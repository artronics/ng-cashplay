import { Component, OnInit } from '@angular/core';
import { Registration } from '../Registration';

@Component({
  selector: 'art-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registration: Registration = {
    name: '',
    email: '',
    account: '',
    password: '',
    passwordConfirm: '',
  };

  constructor() { }

  ngOnInit() {
  }

  onRegister() {

  }

}
