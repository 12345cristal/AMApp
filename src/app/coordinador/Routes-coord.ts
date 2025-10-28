// src/app/coordinador/routes-coord.ts
import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout';
import { InicioComponent } from './pages/inicio/inicio';

export const COORDINADOR_ROUTES: Routes = [
  {
    path: 'coordinador',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
      { path: 'inicio', component: InicioComponent }
    ]
  }
];
