import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = environment.server;
  }

  search(query) {
    let params = new HttpParams()
      .append('query', query);
    return this.http.get(`${this.url}/track/search`, { params : params });
  }

  getRandomTracks(venueID, count) {
    let params = new HttpParams()
      .append('venueID', venueID)
      .append('count', count);
    return this.http.get(`${this.url}/track/random`, { params : params });
  }
}
