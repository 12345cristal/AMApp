import { Injectable, signal, WritableSignal } from '@angular/core';
import type { Beneficiario } from '../models/beneficiarios';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Singleton
})
export class BeneficiarioService {
  // URL base de tu API FastAPI
  private apiUrl = 'http://localhost:8000/api/beneficiarios';

  constructor(private http: HttpClient) {}

  // Crear beneficiario
  crear(beneficiario: Beneficiario): Observable<Beneficiario> {
    return this.http.post<Beneficiario>(this.apiUrl, beneficiario);
  }

  // Obtener beneficiarios
  listar(): Observable<Beneficiario[]> {
    return this.http.get<Beneficiario[]>(this.apiUrl);
  }
}
