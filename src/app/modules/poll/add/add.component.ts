import { Component, OnInit } from '@angular/core';
import { VenueService } from '../../../service/venue/venue.service';
import { TrackService } from '../../../service/track/track.service';
import { PollService } from '../../../service/poll/poll.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  venues: any;
  count: number;
  showSearch: boolean;
  showAutomatic: boolean;
  poll: any;

  constructor(protected router: Router,
              protected venueService: VenueService,
              protected trackService: TrackService,
              protected pollService: PollService) {
    this.count = 3;
    this.showSearch = false;
    this.showAutomatic = false;

    this.poll = {
      venueID: null,
      tracks: []
    };
  }

  ngOnInit() {
    this.venueService.getCleanSpaces().subscribe(data => {
      this.venues = data;
    });
  }

  automaticSelection(){
    this.trackService.getRandomTracks(this.poll.venueID, this.count)
      .subscribe(
      data => {
        this.poll.tracks = data;
      }
    );
  }

  addTrack(track){
    this.poll.tracks.push(track);
  }

  remove(track){
    const index = this.poll.tracks.indexOf(track, 0);
    if (index > -1) {
      this.poll.tracks.splice(index, 1);
    }
  }

  submit(){
    this.pollService.add(this.poll).subscribe(
      data => {
        this.router.navigate(["/dashboard/venue/list"]);
      }, error => {
        console.log(error);
      }
    )
  }

}
