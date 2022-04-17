import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-my-header-shadow, app-my-header-shadow-minor',
  template: `
    <div>
      <p>Test</p>
      <ng-content></ng-content>
    </div>
  `,
  encapsulation: ViewEncapsulation.ShadowDom,
  styles: [
    `
      :host(app-my-header-shadow) {
        div {
          display: flex;
          align-items: center;
          width: 100%;
          height: 80px;
          gap: 20px;
          background: var(--background);

          > * {
            margin-left: 20px;
          }
        }
      }

    `
  ]
})
export class MyHeaderShadowComponent implements OnInit {

  @Input() level = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.level++;
  }

}
