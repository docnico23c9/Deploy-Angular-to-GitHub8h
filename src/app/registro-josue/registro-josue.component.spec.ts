import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroJosueComponent } from './registro-josue.component';

describe('RegistroJosueComponent', () => {
  let component: RegistroJosueComponent;
  let fixture: ComponentFixture<RegistroJosueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroJosueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroJosueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
