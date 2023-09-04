// src/main.ts

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module'; // Import your AppModule

const bootstrap = () => {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
};

// Enable production mode if needed (optional)
if (process.env['NODE_ENV'] === 'production') {
  enableProdMode();
}

// Bootstrap the Angular application
bootstrap();
