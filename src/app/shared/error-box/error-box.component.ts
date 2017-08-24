import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'art-error-box',
  templateUrl: './error-box.component.html',
  styleUrls: ['./error-box.component.scss']
})
export class ErrorBoxComponent implements OnInit {
  @Input() errorMsg: string;

  constructor() {
  }

  ngOnInit() {
  }

}
