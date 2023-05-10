import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MineCertComponent } from './mine-cert.component';

describe('MineCertComponent', () => {
  let component: MineCertComponent;
  let fixture: ComponentFixture<MineCertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MineCertComponent]
    });
    fixture = TestBed.createComponent(MineCertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
