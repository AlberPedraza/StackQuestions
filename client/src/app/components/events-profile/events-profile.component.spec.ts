import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsProfileComponent } from './events-profile.component';

describe('EventsProfileComponent', () => {
  let component: EventsProfileComponent;
  let fixture: ComponentFixture<EventsProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
