import { Component, OnInit } from '@angular/core';
import {authService} from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:authService) { }

  login(username, password){
    this.auth.login(username,password).subscribe();
  }

  logout() {
    this.auth.logout().subscribe();
  }
  ngOnInit() {
  }

}
