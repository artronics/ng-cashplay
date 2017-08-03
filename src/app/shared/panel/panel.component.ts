import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'art-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit {
  @Input() title: string;
  @Input() collapsable = false;
  @Input() collapsed = true;


  constructor() {
  }

  ngOnInit() {
  }

  onCollapse() {
    this.collapsed = !this.collapsed;
  }
}
