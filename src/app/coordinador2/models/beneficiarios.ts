export interface Beneficiario {
  // Información personal
  nombre: string;
  fechaNacimiento: string;
  genero: 'masculino' | 'femenino' | '';
  diagnostico: string;
  alergias: string;
  medicamentos: string;

  // Información del tutor
  tutor: string;
  telefono: string;
  correo: string;
  direccion: string;

  // Documentos
  actaNacimiento?: File | null;
  ineTutor?: File | null;
  comprobanteDomicilio?: File | null;
}
