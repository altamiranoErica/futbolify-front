import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class VenueService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = environment.server;
  }

  getSpaces() {
    return this.http.get(`${this.url}/venue/list_with_track`);
  }

  getCleanSpaces() {
    return this.http.get(`${this.url}/venue/list`);
  }

  add(venue) {
    const params = new HttpParams()
      .set('code', venue.code)
      .set('name', venue.name);
    return this.http.post(`${this.url}/venue/register`, params);
  }
}