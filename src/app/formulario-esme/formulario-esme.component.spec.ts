import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEsmeComponent } from './formulario-esme.component';

describe('FormularioEsmeComponent', () => {
  let component: FormularioEsmeComponent;
  let fixture: ComponentFixture<FormularioEsmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioEsmeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioEsmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
