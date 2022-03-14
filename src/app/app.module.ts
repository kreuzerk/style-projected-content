import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyHeaderComponent } from './my-header/my-header.component';
import { FooComponent } from './foo/foo.component';
import { MyHeaderNgDeepComponent } from './my-header-ng-deep/my-header-ng-deep.component';
import { MyHeaderShadowComponent } from './my-header-shadow/my-header-shadow.component';
import { MyHeaderVeNoneComponent } from './my-header-ve-none/my-header-ve-none.component';
import { MyHeaderCssVarComponent } from './my-header-css-var/my-header-css-var.component';
import { MyHeaderGlobalStylesComponent } from './my-header-global-styles/my-header-global-styles.component';
import { MyHeaderPartComponent } from './my-header-part/my-header-part.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    FooComponent,
    MyHeaderNgDeepComponent,
    MyHeaderShadowComponent,
    MyHeaderVeNoneComponent,
    MyHeaderCssVarComponent,
    MyHeaderGlobalStylesComponent,
    MyHeaderPartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
