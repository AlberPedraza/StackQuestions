import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferencesSignupComponent } from './conferences-signup.component';

describe('ConferencesSignupComponent', () => {
  let component: ConferencesSignupComponent;
  let fixture: ComponentFixture<ConferencesSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferencesSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferencesSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
