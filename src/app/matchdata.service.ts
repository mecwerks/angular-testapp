import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MatchdataService {

  constructor(
    private http: HttpClient
  ) { }

  getReplayData(matchid) {
    return this.http.get(`/assets/replays/test.json`);
  }
}