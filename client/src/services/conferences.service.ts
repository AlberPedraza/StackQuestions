import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

const BASE_DOMAIN = 'http://localhost:3000';
const BASE_URL = 'http://localhost:3000/api/conferences';

@Injectable()
export class conferencesService {
  options:object = {
    withCredentials:true
  }

  conferences:any;
  loginEvent:EventEmitter<object> = new EventEmitter();

  constructor(private http: Http, private router: Router) {
  }

  handleError(e) {
    const error_message = e.json().message;
    console.error(error_message);
    return Observable.throw(e.json().message);
  }

  handleConferences(obj) {
    this.conferences = obj;
    console.log("entrando a conferences")
    console.log("esto es handle:",this.conferences)
    this.loginEvent.emit(this.conferences);
    return this.conferences;
  }
  getConferences(){
    return this.http.get(`${BASE_URL}`, this.options)
    .map(res => res.json())
    .catch(err => this.handleError(err));
  }

addEventForm(){
  console.log("addEventForm")
  return this.http.get(`${BASE_URL}`, this.options)
    .map(res => res.json())
    .catch(err => this.handleError(err));

}

listOneConferences(id){
  console.log("servicio, listOneser (id)",id)
  console.log("esto es listOneser--->",this.conferences)
  return this.http.get(`${BASE_URL}/${id}`, this.options)
    .map(res => res.json())
    .catch(err => this.handleError(err));

}
  signup(myForm:any) {
    return this.http.post(`${BASE_URL}/signup`, myForm.value, this.options)
      .map(res => res.json())
      .catch(err => this.handleError(err));
  }
}
