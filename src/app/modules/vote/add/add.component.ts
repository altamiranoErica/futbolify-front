import { Component, OnInit } from '@angular/core';
import { VenueService } from '../../../service/venue/venue.service';
import { TrackService } from '../../../service/track/track.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  venues: any;
  selectedTracks: any;
  count: number;
  venueID: any;

  constructor(protected venueService: VenueService,
              protected trackService: TrackService) {
    this.count = 3;
  }

  ngOnInit() {
    this.venueService.getCleanSpaces().subscribe(data => {
      this.venues = data;
    });
  }

  automaticSelection(){
    this.trackService.getRandomTracks(this.venueID, this.count)
      .subscribe(
      data => {
        this.selectedTracks = data;
      }
    );
  }

  remove(track){
    const index = this.selectedTracks.indexOf(track, 0);
    if (index > -1) {
      this.selectedTracks.splice(index, 1);
    }
  }

}
