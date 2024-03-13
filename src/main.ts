// Importaciones.
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Verifica si la aplicación se está ejecutando en modo de producción.
if (environment.production) {
  enableProdMode();
}

// Inicia la aplicación Angular en el navegador y maneja cualquier error que ocurra durante el proceso de inicio de la aplicación.
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
