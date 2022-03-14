import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-header-part',
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

      app-my-header-part::part(content) {
        margin-left: 20px;
      }
    `
  ]
})
export class MyHeaderPartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
