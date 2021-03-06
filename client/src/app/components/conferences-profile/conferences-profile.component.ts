import { Component, OnInit } from '@angular/core';
import {conferencesService} from '../../../services/conferences.service';
import { ActivatedRoute } from '@angular/router';
import {authService} from '../../../services/auth.service';

@Component({
  selector: 'app-conferences-profile',
  templateUrl: './conferences-profile.component.html',
  styleUrls: ['./conferences-profile.component.css']
})
export class ConferencesProfileComponent implements OnInit {

  constructor(private auth:authService,private route: ActivatedRoute,private conferences_s:conferencesService) { }

  id: String;
  conferences: any;
  ngOnInit() {
    //this.conferences.addEventForm().subscribe();
    this.route.params
    .subscribe((params) =>
      this.conferences_s.listOneConferences(params.id).subscribe(result =>
        this.conferences = result)
);
  }
}
