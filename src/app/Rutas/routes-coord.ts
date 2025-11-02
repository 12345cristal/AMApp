import { Routes } from '@angular/router';
import { LayoutComponent } from '../coordinador/layout/layout';
import { InicioComponent } from '../coordinador/pages/inicio/inicio';
import { Usuarios } from '../coordinador/pages/usuarios/usuarios';
import {NuevoBeneficiario} from '../coordinador/pages/nuevo-beneficiario/nuevo-beneficiario';
export const COORDINADOR_ROUTES: Routes = [
  {
    path: 'coordinador',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
      { path: 'inicio', component: InicioComponent },
      { path: 'usuarios', component: Usuarios }, // ✅ Nueva ruta agregada
      { path: 'nuevo-beneficiario', component: NuevoBeneficiario} // ✅ Nueva ruta agregada
    ]
  }
];
