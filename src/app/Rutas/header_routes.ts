// src/app/Rutas/header_routes.ts
import { Routes } from '@angular/router';

// Importa tus componentes desde su ruta correcta
import { ServiciosComponent } from '../pages/servicios/servicios';
import { Contacto } from '../pages/contacto/contacto';
import { Equipo } from '../pages/equipo/equipo';
import { Ventas } from '../pages/ventas/ventas';
import { Donar } from '../pages/donar/donar';

export const HEADER_ROUTES: Routes = [
  { path: 'servicios', component: ServiciosComponent },
  { path: 'contacto', component: Contacto },
  { path: 'equipo', component: Equipo },
  { path: 'ventas', component: Ventas },
{ path: 'donar', component: Donar }

];
