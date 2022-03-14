import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-my-header-shadow',
  template: `
    <div>
      <ng-content></ng-content>
    </div>
  `,
  encapsulation: ViewEncapsulation.ShadowDom,
  styles: [
    `
      div {
        display: flex;
        align-items: center;
        width: 100%;
        height: 80px;
        background: #d5d2d2;
      }

      button, a, app-foo {
        margin-left: 20px;
      }
    `
  ]
})
export class MyHeaderShadowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
