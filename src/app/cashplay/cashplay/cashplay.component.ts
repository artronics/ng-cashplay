import { Component, OnInit } from '@angular/core';
import { Account } from '../../account';

@Component({
  selector: 'art-cashplay',
  templateUrl: './cashplay.component.html',
  styleUrls: ['./cashplay.component.scss']
})
export class CashplayComponent implements OnInit {
  account: Account;

  constructor() {
    this.account = JSON.parse(window.localStorage.getItem('account')) as Account;
  }

  ngOnInit() {
  }

}
