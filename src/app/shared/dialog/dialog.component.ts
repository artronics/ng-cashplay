import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'art-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @Input() title: string;

  constructor() {
  }

  ngOnInit() {
  }

}
