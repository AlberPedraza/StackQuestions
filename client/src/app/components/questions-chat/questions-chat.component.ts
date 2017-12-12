import { Component, OnInit } from '@angular/core';
import {questionsService} from '../../../services/questions.service';

@Component({
  selector: 'app-questions-chat',
  templateUrl: './questions-chat.component.html',
  styleUrls: ['./questions-chat.component.css']
})
export class QuestionsChatComponent implements OnInit {

  constructor(private questions_s:questionsService) { }

  chat:object;

  ngOnInit() {
  }

}
