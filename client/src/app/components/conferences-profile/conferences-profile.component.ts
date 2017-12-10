import { Component, OnInit } from '@angular/core';
import {conferencesService} from '../../../services/conferences.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conferences-profile',
  templateUrl: './conferences-profile.component.html',
  styleUrls: ['./conferences-profile.component.css']
})
export class ConferencesProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute,private conferences_s:conferencesService) { }

  id: String;
  conferences: Object;

  ngOnInit() {
    this.route.params
 .subscribe((params) => this.id = String(params['id']));
 this.conferences_s.listOneser(this.id).subscribe();

 console.log("ngOnInit confe profile",this.id);

  }
}
