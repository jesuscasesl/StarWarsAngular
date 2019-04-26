import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchfilmComponent } from './searchfilm.component';

describe('SearchfilmComponent', () => {
  let component: SearchfilmComponent;
  let fixture: ComponentFixture<SearchfilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchfilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchfilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
