import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPracticante } from './registro-practicante';

describe('RegistroPracticante', () => {
  let component: RegistroPracticante;
  let fixture: ComponentFixture<RegistroPracticante>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroPracticante]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroPracticante);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
