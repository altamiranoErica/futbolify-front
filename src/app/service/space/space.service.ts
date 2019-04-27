import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SpaceService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = environment.server;
  }

  getSpaces() {
    return this.http.get(`${this.url}/space/list_with_track`);
  }

  getCleanSpaces() {
    return this.http.get(`${this.url}/space/list`);
  }

  add(space) {
    const params = new HttpParams()
      .set('code', space.code)
      .set('name', space.name);
    return this.http.post(`${this.url}/space/register`, params);
  }
}
