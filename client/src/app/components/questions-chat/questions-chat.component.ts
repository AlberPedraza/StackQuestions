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
  form = {message:String,creator:String,events_id:String,idQuestion:String,username:String,score:0};
  @Input() events:any;

  constructor(private questions_s:questionsService, private auth:authService) { }
  // console.log(events);

  ngOnInit() {

    this.auth.isLoggedIn().subscribe(result => this.user = result);
      this.questions_s.getQuestions(this.events._id).subscribe(result =>
        this.questions = result);
      this.questions_s.clearArray();
  }

  upQuestions(idQuestion){
    //console.log("sumas 1 a mensaje");
    console.log("vista,upQuestions",this.form);
    this.form.idQuestion = idQuestion;
    this.questions_s.upQuestions(this.form).subscribe(result => {this.questions = result});
  }

  sendContent(m){
    console.log("broski",this.events)
    console.log("user!!!!!!!!",this.user);
    this.form.message = m;
    this.form.creator = this.user._id;
    this.form.username = this.user.username;
    this.form.events_id = this.events._id;
    this.questions_s.sendMessage(this.form)
  }
}
