import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'my-header-ng-deep',
  template: `
    <div>
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

      ::ng-deep button, ::ng-deep a, ::ng-deep app-foo {
        margin-left: 20px;
      }
    `
  ]
})
export class MyHeaderNgDeepComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
