import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsSignupComponent } from './events-signup.component';

describe('EventsSignupComponent', () => {
  let component: EventsSignupComponent;
  let fixture: ComponentFixture<EventsSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
