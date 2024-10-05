import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withViewTransitions({
        // skipInitialTransition:true, // El primero no tenga efecto de transicion y despues de eso que si tengan
        onViewTransitionCreated(transitionInfo) {
          console.log({transitionInfo});
        }

      }),
    ),
    importProvidersFrom(
      HttpClientModule
    )
  ]
};


/**
 * withViewTransitions solo funciona con google chrome y no asi con firefox developer
 */  

/**
 * importProvidersFrom importar todos los providers como si fuera el module pricipal de un proyecto angular
 */