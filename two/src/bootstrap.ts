import { enableProdMode, PlatformRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

let platform: PlatformRef
if ((window as any).platform) {
  platform = (window as any).platform;
} else {
  platform = platformBrowserDynamic();
  (window as any).platform = platform;
}
platform.bootstrapModule(AppModule)
  .catch(err => console.error(err));
