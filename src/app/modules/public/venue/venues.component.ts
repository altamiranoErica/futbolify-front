import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { VenueService } from '../../../service/venue/venue.service';
import { PollService } from '../../../service/poll/poll.service';

@Component({
  selector: 'app-venues',
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.css']
})
export class VenuesComponent implements OnInit {

  venues: any;
  colors = ['success', 'warning', 'info', 'danger', 'primary'];
  selectedPoll: any;

  constructor(private venueService: VenueService,
              private pollService: PollService,
              private sanitizer: DomSanitizer) {
    this.selectedPoll = { };
  }

  ngOnInit() {
    this.venueService.getSpaces().subscribe(
      (_venues: any[]) => {
      this.pollService.getAllActives().subscribe(
        (_polls: any[]) => {
          _venues.forEach(v => v.poll = _polls.find(poll => poll.venueID === v.id));

          this.venues = _venues;
        }
      )
    });
  }

  safeURL(url){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
