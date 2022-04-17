import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-my-header',
  template: `
      <nav>
        <ng-content></ng-content>
      </nav>
      <img src="assets/angular.png" alt="logo"/>
  `,
  styles: [
    `
      :host {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 80px;
        padding-left: 20px;
        padding-right: 20px;
        background: #3a0ca3;
        color: white;
        box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;

        nav {
          display: flex;
          align-items: center;
        }

        img {
          width: 50px;
          height: 50px;
          justify-self: flex-end;
        }

        > * {
          margin-left: 20px;
        }
      }
    `
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class MyHeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
