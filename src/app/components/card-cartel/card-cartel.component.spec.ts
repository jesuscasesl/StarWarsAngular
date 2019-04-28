import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCartelComponent } from './card-cartel.component';

describe('CardCartelComponent', () => {
  let component: CardCartelComponent;
  let fixture: ComponentFixture<CardCartelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCartelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCartelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
