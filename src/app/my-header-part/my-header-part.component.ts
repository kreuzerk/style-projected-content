import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-my-header-part',
  template: `
    <div part="wrapper">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      div {
        display: flex;
        align-items: center;
        width: 100%;
        height: 80px;
        background: #d5d2d2;
      }
    `
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class MyHeaderPartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
