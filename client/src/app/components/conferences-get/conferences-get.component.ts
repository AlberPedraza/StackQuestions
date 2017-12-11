import { Component, OnInit } from '@angular/core';
import {conferencesService} from '../../../services/conferences.service';

@Component({
  selector: 'app-conferences-get',
  templateUrl: './conferences-get.component.html',
  styleUrls: ['./conferences-get.component.css']
})
export class ConferencesGetComponent implements OnInit {

conferences:object;

  constructor(private conferences_s:conferencesService) { }

  ngOnInit() {
    this.conferences_s.getConferences().subscribe(result =>
      this.conferences = result);
  }

}
