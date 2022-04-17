import {Directive, HostBinding} from "@angular/core";

@Directive({
  selector: '[headerPadding]'
})
export class MyHeaderItemDirective {

  @HostBinding('style.margin-left') value = '20px';
}
