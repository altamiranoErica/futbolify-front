import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpaceService } from '../../../service/space/space.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  endpoint: string = 'http://localhost:4200/space/callback';
  space: any;
  url: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private spaceService: SpaceService) {
    this.space = {};
    this.url = 'https://accounts.spotify.com/authorize?client_id=ef56629f44be41e895cac7d03141b9e0&response_type=code&redirect_uri='
      + this.endpoint
      + '&state=34fFs29kd09&show_dialog=true&scope=user-read-recently-played playlist-modify-public playlist-read-collaborative user-read-currently-playing';
  }


  ngOnInit() {
    const code = this.route.snapshot.params['code'];
    if(code) this.space.code = code;
  }

  submit(){
    this.spaceService.add(this.space).subscribe(data => {
      this.router.navigate(["/space/list"]);
    });
  }

}
