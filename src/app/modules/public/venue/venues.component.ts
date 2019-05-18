import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { VenueService } from '../../../service/venue/venue.service';

@Component({
  selector: 'app-venues',
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.css']
})
export class VenuesComponent implements OnInit {

  venues: any;
  colors = ['success', 'warning', 'info', 'danger', 'primary'];

  constructor(private venueService: VenueService,
              private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.venueService.getSpaces().subscribe(data => {
      this.venues = data;
    });
  }

  safeURL(url){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
