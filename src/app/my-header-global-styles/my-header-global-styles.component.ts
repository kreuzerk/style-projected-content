import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-header-global-styles',
  template: `
    <div>
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    div {
      display: flex;
      align-items: center;
      width: 100%;
      height: 80px;
      background: #d5d2d2;
    }
  `]
})
export class MyHeaderGlobalStylesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
