import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEGPComponent } from './registro-e-g-p.component';

describe('RegistroEGPComponent', () => {
  let component: RegistroEGPComponent;
  let fixture: ComponentFixture<RegistroEGPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroEGPComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistroEGPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
