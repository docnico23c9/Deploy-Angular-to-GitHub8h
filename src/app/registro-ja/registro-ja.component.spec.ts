import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroJAComponent } from './registro-ja.component';

describe('RegistroJAComponent', () => {
  let component: RegistroJAComponent;
  let fixture: ComponentFixture<RegistroJAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroJAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroJAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
