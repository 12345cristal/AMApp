import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpedientesPaciente } from './expedientes-paciente';

describe('ExpedientesPaciente', () => {
  let component: ExpedientesPaciente;
  let fixture: ComponentFixture<ExpedientesPaciente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpedientesPaciente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpedientesPaciente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
