import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsGetComponent } from './events-get.component';

describe('EventsGetComponent', () => {
  let component: EventsGetComponent;
  let fixture: ComponentFixture<EventsGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
