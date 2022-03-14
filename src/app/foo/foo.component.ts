import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foo',
  template: `
    <p style="margin-left: var(--margin-left)">
      foo works!
    </p>
  `,
  styles: [
  ]
})
export class FooComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
