import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../../shared/header/header';
import { FooterComponent } from '../../../shared/footer/footer';

@Component({
  selector: 'app-deposito',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './deposito.html',
  styleUrls: ['./deposito.scss'],
  encapsulation: ViewEncapsulation.None // Para que el fondo y estilos full-screen funcionen
})
export class DepositoComponent {
  nombreDeposito: string = '';
  banco: string = '';
  montoDeposito: number | null = null;
  comprobante: File | null = null;

  subirComprobante(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.comprobante = file;
      alert(`Comprobante recibido: ${file.name}`);
    }
  }

  confirmarDeposito() {
    if (!this.nombreDeposito || !this.banco || !this.montoDeposito || !this.comprobante) {
      alert('Por favor completa todos los campos y sube tu comprobante.');
      return;
    }
    alert(`Gracias ${this.nombreDeposito}, tu depósito de $${this.montoDeposito} MXN fue registrado correctamente. Comprobante: ${this.comprobante.name}`);
  }
}
