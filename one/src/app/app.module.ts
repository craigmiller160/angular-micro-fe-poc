import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: []
})
export class AppModule {
  constructor(injector: Injector) {
    const custom = createCustomElement(AppComponent, { injector });
    customElements.define('mfe-one', custom);
  }
  ngDoBootstrap() {}
}
