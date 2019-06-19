import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VenueService } from '../../../service/venue/venue.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  endpoint: string = 'http://localhost:4200/dashboard/venue/callback';
  venue: any;
  url: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private venueService: VenueService) {
    this.venue = {};
    this.url = 'https://accounts.spotify.com/authorize?client_id=ef56629f44be41e895cac7d03141b9e0&response_type=code&redirect_uri='
      + this.endpoint
      + '&state=34fFs29kd09&show_dialog=true&scope=user-read-recently-played playlist-modify-public playlist-read-private playlist-modify-private user-read-currently-playing';
  }


  ngOnInit() {
    const code = this.route.snapshot.params['code'];
    if(code) this.venue.code = code;
  }

  submit(){
    this.venueService.add(this.venue).subscribe(data => {
      this.router.navigate(["/dashboard/venue/list"]);
    });
  }

}
