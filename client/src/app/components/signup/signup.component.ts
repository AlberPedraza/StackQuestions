import { Component, OnInit } from '@angular/core';
import {authService} from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private auth:authService,private router:Router) { }


  submitForm(myForm) {
    this.auth.signup(myForm).subscribe(result=> this.router.navigate(['/profile',result._id]));
  }

// signup(username,password){
//     this.auth.signup(username,password).subscribe();
// }
logout() {
  this.auth.logout().subscribe();
}
  ngOnInit() {
  }
}
