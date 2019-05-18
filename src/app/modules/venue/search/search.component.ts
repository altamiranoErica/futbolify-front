import { Component, OnInit } from '@angular/core';
import { TrackService } from '../../../service/track/track.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  query: string;
  tracks: any;
  showMessage: boolean;

  constructor(private trackService: TrackService) {
    this.tracks = [];
    this.showMessage = false;
  }

  ngOnInit() { }

  search(){
    this.showMessage = false;
    if(this.query){
      this.trackService.search(this.query).subscribe((data: any[]) => {
        this.tracks = data;
        if(data.length === 0) this.showMessage = true;
      });
    } else {
      this.tracks = [];
    }
  }
}
