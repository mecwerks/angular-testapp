import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MatchdataService {

  constructor(
    private http: HttpClient
  ) { }

  getReplayData(matchid) {
    //return this.http.get(`/assets/shipping.json`);
    return this.http.get(`https://raw.githubusercontent.com/mecwerks/angular-testapp/master/src/assets/replays/${matchid}.json`);
  }
}