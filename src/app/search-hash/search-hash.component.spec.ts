import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHashComponent } from './search-hash.component';

describe('SearchHashComponent', () => {
  let component: SearchHashComponent;
  let fixture: ComponentFixture<SearchHashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchHashComponent]
    });
    fixture = TestBed.createComponent(SearchHashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
