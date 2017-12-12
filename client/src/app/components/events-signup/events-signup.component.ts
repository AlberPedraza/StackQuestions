import { Component, OnInit } from '@angular/core';
import {eventsService} from '../../../services/events.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-events-signup',
  templateUrl: './events-signup.component.html',
  styleUrls: ['./events-signup.component.css']
})
export class EventsSignupComponent implements OnInit {
  events:object;
  idConference:String;

  constructor(private events_s:eventsService, private route: ActivatedRoute, private router: Router, private _location: Location) { }
  ngOnInit() {
  }

  submitForm(myForm) {
    this.route.params
      .subscribe((params) =>
        this.events_s.signup(myForm,params.idConference)
          .subscribe(result => {
            this.events = result;
            this.router.navigate(['/conferences/',params.idConference]);
    })
  )}
  backClicked() {
    this._location.back();
  }

}
