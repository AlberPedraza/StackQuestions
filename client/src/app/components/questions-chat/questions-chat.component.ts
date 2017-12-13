import { Component, Input, OnInit } from '@angular/core';
import {questionsService} from '../../../services/questions.service';
import {authService} from '../../../services/auth.service';

@Component({
  selector: 'app-questions-chat',
  templateUrl: './questions-chat.component.html',
  styleUrls: ['./questions-chat.component.css']
})
export class QuestionsChatComponent implements OnInit {
  questions:object;
  user:any;
  form = {message:String,creator:String,events_id:String};
  @Input() events:any;

  constructor(private questions_s:questionsService, private auth:authService) { }
  // console.log(events);

  ngOnInit() {
    this.auth.isLoggedIn().subscribe(result => this.user = result);
  }
  sendContent(m){
    console.log(this.user);
    this.form.message = m;
    this.form.creator = this.user._id;
    this.form.events_id = this.events._id;
    this.questions_s.sendMessage(this.form);
  }
}
