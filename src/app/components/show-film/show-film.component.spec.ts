import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFilmComponent } from './show-film.component';

describe('ShowFilmComponent', () => {
  let component: ShowFilmComponent;
  let fixture: ComponentFixture<ShowFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
