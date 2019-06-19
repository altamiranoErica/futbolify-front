import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = environment.server;
  }

  add(vote){
    const param = new HttpParams().set('data', JSON.stringify(vote));
    return this.http.post(`${this.url}/poll/new`, param);
  }

  getAllActives() {
    return this.http.get(`${this.url}/poll/active_list`);
  }

  vote(vote, track) {
    const param = new HttpParams()
      .set('pollID', vote.id)
      .set('trackID', track.id);
    return this.http.post(`${this.url}/poll/vote`, param);
  }
}
