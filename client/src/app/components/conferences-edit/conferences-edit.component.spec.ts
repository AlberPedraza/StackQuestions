import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferencesEditComponent } from './conferences-edit.component';

describe('ConferencesEditComponent', () => {
  let component: ConferencesEditComponent;
  let fixture: ComponentFixture<ConferencesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferencesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferencesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
