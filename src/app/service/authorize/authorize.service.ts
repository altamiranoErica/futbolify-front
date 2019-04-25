import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthorizeService {

  client_id: string = 'ef56629f44be41e895cac7d03141b9e0';
  client_secret: string = '7a1a681c2b9a45e48d95a5da81610dd9';
  redirect_uri: string = 'http://localhost:4200/authorize';
  scopes: string = 'user-read-recently-played playlist-modify-public ' +
    'playlist-read-collaborative user-read-currently-playing';

  constructor(private http: HttpClient) { }

  login(){
    const params = new HttpParams()
      .set('client_id', this.client_id)
      .set('response_type', 'code')
      .set('redirect_uri', this.redirect_uri)
      .set('state', '34fFs29kd09')
      .set('scope', this.scopes);
    return this.http.post('https://accounts.spotify.com/authorize', params);
  }
}
