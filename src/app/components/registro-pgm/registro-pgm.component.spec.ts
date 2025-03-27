import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPGMComponent } from './registro-pgm.component';

describe('RegistroPGMComponent', () => {
  let component: RegistroPGMComponent;
  let fixture: ComponentFixture<RegistroPGMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroPGMComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroPGMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
