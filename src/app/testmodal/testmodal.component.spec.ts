import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestmodalComponent } from './testmodal.component';

describe('TestmodalComponent', () => {
  let component: TestmodalComponent;
  let fixture: ComponentFixture<TestmodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestmodalComponent]
    });
    fixture = TestBed.createComponent(TestmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
