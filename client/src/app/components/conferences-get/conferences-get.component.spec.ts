import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferencesGetComponent } from './conferences-get.component';

describe('ConferencesGetComponent', () => {
  let component: ConferencesGetComponent;
  let fixture: ComponentFixture<ConferencesGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferencesGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferencesGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
