import { Component, OnInit, inject } from '@angular/core';
import type { Beneficiario } from '../../models/beneficiarios';
import { BeneficiarioService } from '../../services/beneficiario.service';
import { signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-nuevo-beneficiario',
  templateUrl: './nuevo-beneficiario.html',
  styleUrls: ['./nuevo-beneficiario.scss']
})
export class NuevoBeneficiario implements OnInit {
  private beneficiarioService = inject(BeneficiarioService);

  // Signals para los campos
  nombre: WritableSignal<string> = signal('');
  fechaNacimiento: WritableSignal<string> = signal('');
  genero: WritableSignal<'masculino' | 'femenino' | ''> = signal('');
  diagnostico: WritableSignal<string> = signal('');
  alergias: WritableSignal<string> = signal('');
  medicamentos: WritableSignal<string> = signal('');

  tutor: WritableSignal<string> = signal('');
  telefono: WritableSignal<string> = signal('');
  correo: WritableSignal<string> = signal('');
  direccion: WritableSignal<string> = signal('');

  actaNacimiento: WritableSignal<File | null> = signal(null);
  ineTutor: WritableSignal<File | null> = signal(null);
  comprobanteDomicilio: WritableSignal<File | null> = signal(null);

  ngOnInit(): void {
    // Aquí podrías inicializar valores si quieres
  }

  // Manejar envío de formulario
  enviar(): void {
    const nuevo: Beneficiario = {
      nombre: this.nombre(),
      fechaNacimiento: this.fechaNacimiento(),
      genero: this.genero(),
      diagnostico: this.diagnostico(),
      alergias: this.alergias(),
      medicamentos: this.medicamentos(),
      tutor: this.tutor(),
      telefono: this.telefono(),
      correo: this.correo(),
      direccion: this.direccion(),
      actaNacimiento: this.actaNacimiento(),
      ineTutor: this.ineTutor(),
      comprobanteDomicilio: this.comprobanteDomicilio(),
    };

    this.beneficiarioService.crear(nuevo).subscribe({
      next: (res) => {
        console.log('Beneficiario creado:', res);
        alert('Beneficiario registrado correctamente');
        this.limpiarFormulario();
      },
      error: (err) => {
        console.error(err);
        alert('Error al registrar beneficiario');
      }
    });
  }

  // Limpiar formulario
  limpiarFormulario(): void {
    this.nombre.set('');
    this.fechaNacimiento.set('');
    this.genero.set('');
    this.diagnostico.set('');
    this.alergias.set('');
    this.medicamentos.set('');
    this.tutor.set('');
    this.telefono.set('');
    this.correo.set('');
    this.direccion.set('');
    this.actaNacimiento.set(null);
    this.ineTutor.set(null);
    this.comprobanteDomicilio.set(null);
  }

  // Manejar archivos
  manejarArchivo(event: Event, target: WritableSignal<File | null>): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      target.set(input.files[0]);
    }
  }
}
