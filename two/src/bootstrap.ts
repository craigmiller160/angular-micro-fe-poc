import { enableProdMode, PlatformRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const ngVersion: string = require('../package.json').dependencies['@angular/core'];
(window as any).plattform = (window as any).plattform || {};
let platform: PlatformRef | undefined = (window as any).plattform[ngVersion];
if (!platform) {
  platform = platformBrowserDynamic();
  (window as any).plattform[ngVersion] = platform;
}
platform.bootstrapModule(AppModule)
  .catch(err => console.error(err));
