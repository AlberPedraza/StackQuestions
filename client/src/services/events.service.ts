import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment }  from '../environments/environment';

const BASE_DOMAIN = environment.BASE_DOMAIN;
const BASE_URL = `${BASE_DOMAIN}/api/events`;

@Injectable()
export class eventsService {
  options:object = {
    withCredentials:true
}

  events:any;
  loginEvent:EventEmitter<object> = new EventEmitter();

  constructor(private http: Http, private router: Router) {
  }

  handleError(e) {
    const error_message = e.json().message;
    console.error(error_message);
    return Observable.throw(e.json().message);
  }

  handleEvents(obj) {
    this.events = obj;
    console.log("entrando a events")
    console.log("esto es handle:",this.events)
    this.loginEvent.emit(this.events);
    return this.events;
  }
  getEvents(){
    console.log("getEvents")
    return this.http.get(`${BASE_URL}`, this.options)
    .map(res => res.json())
    .catch(err => this.handleError(err));
  }

  listOneEvents(id){
  return this.http.get(`${BASE_URL}/${id}`, this.options)
    .map(res => res.json())
    .catch(err => this.handleError(err));

  }

  signup(myForm,id) {
    console.log("id -->", id)
    return this.http.post(`${BASE_URL}/${id}/signup`, myForm.value, this.options)
      .map(res => res.json())
      .catch(err => this.handleError(err));
  }

  followEvent(form){
    console.log("idEvent services",form.idEvent);
    return this.http.post(`${BASE_URL}/${form.idEvent}/follow`, form, this.options)
      .map(res => res.json())
    .catch(err => this.handleError(err));
  }
}
