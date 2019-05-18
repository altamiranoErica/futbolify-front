import { Component, OnInit } from '@angular/core';
import { VenueService } from '../../../service/venue/venue.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  venues: any;

  constructor(private venueService: VenueService) { }

  ngOnInit() {
    this.venueService.getCleanSpaces().subscribe(data => {
      this.venues = data;
    });
  }

}
