import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoBeneficiario } from './pages/nuevo-beneficiario/nuevo-beneficiario';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    NuevoBeneficiario,
    // otros componentes
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class CoordinadorModule {}
