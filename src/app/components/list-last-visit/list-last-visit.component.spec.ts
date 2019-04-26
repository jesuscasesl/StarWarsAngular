import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLastVisitComponent } from './list-last-visit.component';

describe('ListLastVisitComponent', () => {
  let component: ListLastVisitComponent;
  let fixture: ComponentFixture<ListLastVisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLastVisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLastVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
