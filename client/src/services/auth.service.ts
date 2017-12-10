import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

const BASE_DOMAIN = 'http://localhost:3000';
const BASE_URL = 'http://localhost:3000/api/user';

@Injectable()
export class authService {
  options:object = {
    withCredentials:true
  }

  user:any;
  loginEvent:EventEmitter<object> = new EventEmitter();

  constructor(private http: Http, private router: Router) {
    this.isLoggedIn().subscribe();
  }


getUser(){
  return this.user
}
  handleError(e) {
    const error_message = e.json().message;
    console.error(error_message);
    return Observable.throw(e.json().message);
  }

  handleUser(obj) {
    this.user = obj;
    console.log("entrando a userlogin")
    console.log(this.user)
    this.loginEvent.emit(this.user);
    return this.user;
  }

listOneser(idUser){
  console.log(this.user);
  return this.http.get(`${BASE_URL}/${idUser}`, this.options)
    .map(res => res.json())
    .map(user => this.handleUser(user))
    .catch(this.handleError);

}
  signup(myForm:any) {
    return this.http.post(`${BASE_URL}/signup`, myForm.value, this.options)
      .map(res => res.json())
      .map(user => {
        this.handleUser(user);
        this.router.navigate(['/profile']);
      })
      .catch(this.handleError);
  }

  edit(myForm:any) {
    console.log("este es el id",this.user._id)
    console.log("entra aquí", myForm.value.username)
    return this.http.put(`${BASE_URL}/${this.user._id}/edit`, myForm.value, this.options)
      .map(res => res.json())
      .map(user => {
        this.handleUser(user);
        this.router.navigate(['/profile']);
      })
      .catch(this.handleError);
  }

  login(username:string, password:string) {
    console.log(`Login with user:${username} and password ${password}`);
    return this.http.post(`${BASE_URL}/login`, {username, password}, this.options)
      .map(res => res.json())
      .map(user => this.handleUser(user))
      .catch(this.handleError);
  }

  logout() {
    return this.http.get(`${BASE_URL}/logout`,this.options)
      .map(res => res.json())
      .map(user => this.handleUser(null))
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`${BASE_URL}/loggedin`,this.options)
      .map(res => res.json())
      .map(user => this.handleUser(user))
      .catch(this.handleError);
  }
}
