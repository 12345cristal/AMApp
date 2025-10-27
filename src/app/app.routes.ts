import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing/landing';
import { HEADER_ROUTES } from './Rutas/header_routes';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  ...HEADER_ROUTES,
  { path: '**', redirectTo: '' }
];
