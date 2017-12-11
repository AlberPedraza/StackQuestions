import { Component, OnInit } from '@angular/core';
import {eventsService} from '../../../services/events.service';

@Component({
  selector: 'app-events-get',
  templateUrl: './events-get.component.html',
  styleUrls: ['./events-get.component.css']
})
export class EventsGetComponent implements OnInit {
  events:object;

  constructor(private events_s:eventsService) { }

  ngOnInit() {
    console.log("entraaaaaaaaaaaaaa")
    this.events_s.getEvents().subscribe(result =>
      this.events = result);
  }

}
