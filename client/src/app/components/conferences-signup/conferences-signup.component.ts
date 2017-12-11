import { Component, OnInit } from '@angular/core';
import {conferencesService} from '../../../services/conferences.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conferences-signup',
  templateUrl: './conferences-signup.component.html',
  styleUrls: ['./conferences-signup.component.css']
})
export class ConferencesSignupComponent implements OnInit {
  conferences:object;

  constructor(private conferences_s:conferencesService, private router: Router) { }

  submitForm(myForm) {
    this.conferences_s.signup(myForm).subscribe(result=> this.router.navigate(['/conferences',result._id]));
  }
  ngOnInit() {
  }

}
