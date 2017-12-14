import { Component, OnInit } from '@angular/core';
import {eventsService} from '../../../services/events.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-events-profile',
  templateUrl: './events-profile.component.html',
  styleUrls: ['./events-profile.component.css']
})
export class EventsProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute,private events_s:eventsService) { }
  id: String;
  events: any;

  ngOnInit() {
    this.route.params
    .subscribe((params) =>
      this.events_s.listOneEvents(params.id).subscribe(result =>
        this.events = result)
);
  }

  followEventBtn(idEvent){
    this.events.idEvent = idEvent;
    this.events_s.followEvent(this.events)
      .subscribe(result => this.events = result);
  }

}
