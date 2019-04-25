import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `<h1>LOGIN WITH SPOTIFY</h1>
              <a href="{{url}}">Login</a>`
})
export class LoginComponent implements OnInit{

  url: string;

  constructor(){ }

  ngOnInit(){
    this.url = 'https://accounts.spotify.com/authorize?client_id=ef56629f44be41e895cac7d03141b9e0&response_type=code&redirect_uri=http://localhost:4200/authorize/callback&state=34fFs29kd09&scope=user-read-recently-played playlist-modify-public playlist-read-collaborative user-read-currently-playing';
  }
}
