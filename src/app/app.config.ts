import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { MessageRepository } from './core/domain/repositoriy/message.repository';
import { MessageHttpRepository } from './core/infraestructure/api/message-http.repository';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DecryptMessageHttpRepository } from './core/infraestructure/api/decrypt-message-http.repositry';
import { DecryptMessageRepository } from './core/domain/repositoriy/decrypt-message.repository';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    {
      provide: MessageRepository,
      useClass: MessageHttpRepository,
    }, 
    {
      provide: DecryptMessageRepository,
      useClass: DecryptMessageHttpRepository
    },
    provideAnimationsAsync()
  ]
};
