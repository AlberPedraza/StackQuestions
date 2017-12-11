import { Component, OnInit } from '@angular/core';
import {authService} from '../../../services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: any;

  constructor(private auth:authService) { }

  ngOnInit() {
    this.auth.isLoggedIn().subscribe(result => this.user = result);
  }

}
