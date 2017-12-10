import { Component, OnInit } from '@angular/core';
import {authService} from '../../../services/auth.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  constructor(private auth:authService) { }


  submitForm(myForm) {
    this.auth.edit(myForm).subscribe();
  }


  ngOnInit() {
  }


}
