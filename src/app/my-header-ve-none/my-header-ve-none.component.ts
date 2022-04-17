import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-my-header-ve-none',
  template: `
    <div>
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    app-my-header-ve-none {
      div {
        display: flex;
        align-items: center;
        width: 100%;
        height: 80px;
        background: #d5d2d2;

        > * {
          margin-left: 20px;
        }
      }
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class MyHeaderVeNoneComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
