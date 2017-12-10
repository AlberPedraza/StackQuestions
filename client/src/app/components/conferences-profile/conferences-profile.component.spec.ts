import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferencesProfileComponent } from './conferences-profile.component';

describe('ConferencesProfileComponent', () => {
  let component: ConferencesProfileComponent;
  let fixture: ComponentFixture<ConferencesProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferencesProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferencesProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
