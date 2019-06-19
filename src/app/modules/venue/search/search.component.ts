import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  @Output() trackEmitter = new EventEmitter();

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

  addTrack(track){
    this.trackEmitter.emit(track);
    // this.clean();
  }

  clean(){
    this.query = null;
    this.tracks = [];
    this.showMessage = false;
  }
}
