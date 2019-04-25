import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';


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
}
