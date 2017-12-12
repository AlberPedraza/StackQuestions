import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsChatComponent } from './questions-chat.component';

describe('QuestionsChatComponent', () => {
  let component: QuestionsChatComponent;
  let fixture: ComponentFixture<QuestionsChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
