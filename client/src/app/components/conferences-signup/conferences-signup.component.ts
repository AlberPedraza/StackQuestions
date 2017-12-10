import { Component, OnInit } from '@angular/core';
import {conferencesService} from '../../../services/conferences.service';

@Component({
  selector: 'app-conferences-signup',
  templateUrl: './conferences-signup.component.html',
  styleUrls: ['./conferences-signup.component.css']
})
export class ConferencesSignupComponent implements OnInit {

  constructor(private conferences_s:conferencesService) { }

  submitForm(myForm) {
    this.conferences_s.signup(myForm).subscribe();
  }
  ngOnInit() {
  }

}
