import { Component, OnInit } from '@angular/core';
import {authService} from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {

  constructor(private auth:authService,private router:Router) { }

  ngOnInit() {
  }

}
