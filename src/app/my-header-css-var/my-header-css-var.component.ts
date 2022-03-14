import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-header-css-var',
  template: `
    <div>
      <ng-content></ng-content>
    </div>
  `,
  styles: [`

    :host {
      --margin-left: 20px;
    }

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
  `]
})
export class MyHeaderCssVarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
