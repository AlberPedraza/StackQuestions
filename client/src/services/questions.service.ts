import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import * as io from 'socket.io-client';
import { environment }  from '../environments/environment';

const BASE_DOMAIN = environment.BASE_DOMAIN;
const BASE_URL = `${BASE_DOMAIN}/api/questions`;

interface Message{
  message:string;
  user:string;
  score:Number
}

@Injectable()
export class questionsService {
  options:object = {
    withCredentials:true
}
  questions:object;
  socket:any;
  messages:Array<Message> = [];
  scoreQuestion:object;
    loginQuestion:EventEmitter<object> = new EventEmitter();
  //loginQuestion:QuestionEmitter<object> = new QuestionEmitter();

  constructor(private http: Http, private router: Router){
    console.log("Created chat service");
    this.socket = io.connect(`${BASE_DOMAIN}`);
    //recibe datos del socket
    this.socket.on('recibe-message', function(form:any){
      console.log(`Mensaje Recibido: "${form.message}"`);
      //muestra datos en la vista del socket
      console.log("ON!",form);
      this.messages.push({
        user: form.name,
        message:form.message,
        score: 0
      })

      this.scoreQuestion = {
        score: form.score
      };

    }.bind(this));
  }


  handleError(e) {
    const error_message = e.json().message;
    console.error(error_message);
    return Observable.throw(e.json().message);
  }
  handleQuestions(obj) {
    this.questions = obj;
    console.log("entrando a questions")
    console.log("esto es handle:",this.questions)
    this.loginQuestion.emit(this.questions);
    return this.questions;
  }
  getQuestions(idEvent){
    console.log("get-idEvents -----------> ()",idEvent)
    return this.http.get(`${BASE_URL}/${idEvent}`, this.options)
    .map(res => res.json())
    .catch(err => this.handleError(err));
  }

  clearArray(){
    this.messages = [];
  }
  upQuestions(form){
    console.log("idcuestions services",form.idQuestion);
    return this.http.post(`${BASE_URL}/${form.idQuestion._id}/upscore`, form.idQuestion, this.options)
      .map(res => res.json())
    .catch(err => this.handleError(err));
    // //emite al back por socket
    // this.socket.emit('send-message',form);
    // //muestrar mensaje actual introducido, en la vista del chat
    // this.scoreQuestion = {
    //   score: form.score
    // };
  }
  sendMessage(form){
    console.log(`Mandando mensaje: "${form}"`);
    //emite al back por socket
    this.socket.emit('send-message',form);
    //muestrar mensaje actual introducido en la vista del chat
console.log("sssseervv",form.idQuestion.score)
    this.messages.push({
      user: "yo",
      message:form.message,
      score: 0
    })
  }

}
