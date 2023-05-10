import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowblocksComponent } from './showblocks.component';

describe('ShowblocksComponent', () => {
  let component: ShowblocksComponent;
  let fixture: ComponentFixture<ShowblocksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowblocksComponent]
    });
    fixture = TestBed.createComponent(ShowblocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
