import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroTrabajador } from './registro-trabajador';

describe('RegistroTrabajador', () => {
  let component: RegistroTrabajador;
  let fixture: ComponentFixture<RegistroTrabajador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroTrabajador]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroTrabajador);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
