import { Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import * as io from 'socket.io-client';

const BASE_DOMAIN = 'http://localhost:3000';
const BASE_URL = 'http://localhost:3000/api/questions';

interface Message{
  message:string;
  user:string;
}

@Injectable()
export class questionsService {
  options:object = {
    withCredentials:true
}
  questions:object;
  socket:any;
  messages:Array<Message> = [];
  //loginQuestion:QuestionEmitter<object> = new QuestionEmitter();

  constructor(){
    console.log("Created chat service");
    this.socket = io.connect(`${BASE_DOMAIN}`);
    this.socket.on('recibe-message', function(form:any){
      console.log(`Mensaje Recibido: "${form.message}"`);
      this.messages.push({
        user: 'Anonimo',
        message:form.message
      })
    }.bind(this));
  }

  sendMessage(form){
    console.log(`Mandando mensaje: "${form}"`);
    this.socket.emit('send-message',form);
    this.messages.push({
      user: 'Yo',
      message:form.message
    })
  }
}
