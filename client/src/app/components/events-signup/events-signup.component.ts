import { Component, OnInit } from '@angular/core';
import {eventsService} from '../../../services/events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events-signup',
  templateUrl: './events-signup.component.html',
  styleUrls: ['./events-signup.component.css']
})
export class EventsSignupComponent implements OnInit {
  events:object;

  constructor(private events_s:eventsService, private router: Router) { }

  submitForm(myForm) {
    this.events_s.signup(myForm).subscribe(result=> this.router.navigate(['/events',result._id]));
  }

  ngOnInit() {
  }

}
