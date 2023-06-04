import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbycatComponent } from './searchbycat.component';

describe('SearchbycatComponent', () => {
  let component: SearchbycatComponent;
  let fixture: ComponentFixture<SearchbycatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchbycatComponent]
    });
    fixture = TestBed.createComponent(SearchbycatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
