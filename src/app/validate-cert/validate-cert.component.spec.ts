import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateCertComponent } from './validate-cert.component';

describe('ValidateCertComponent', () => {
  let component: ValidateCertComponent;
  let fixture: ComponentFixture<ValidateCertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidateCertComponent]
    });
    fixture = TestBed.createComponent(ValidateCertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
