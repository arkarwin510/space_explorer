import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { environment } from './environments/environment';
import { ENVIRONMENT } from './app/core/tokens/environment.token';

const routes = [
  { path: '', loadComponent: () => import('./app/features/astronomy/presentation/pages/astronomy.component').then(m => m.AstronomyComponent) },
  { path: 'astronomy', loadComponent: () => import('./app/features/astronomy/presentation/pages/astronomy.component').then(m => m.AstronomyComponent) }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    { provide: ENVIRONMENT, useValue: environment }
  ]
})
  .catch(err => console.error(err));
