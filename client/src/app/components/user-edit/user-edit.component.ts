import { Component, OnInit } from '@angular/core';
import {authService} from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  constructor(private auth:authService,private router:Router) { }


  submitForm(myForm) {
    this.auth.edit(myForm).subscribe(result=> this.router.navigate(['/profile']));
  }


  ngOnInit() {
  }


}
