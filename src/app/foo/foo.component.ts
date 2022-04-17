import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-foo',
  template: `
    <p>
      link from foo component
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class FooComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
