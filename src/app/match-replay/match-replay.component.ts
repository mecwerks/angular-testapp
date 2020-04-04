import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimationPlayer } from '@angular/animations';

import { MatchdataService } from '../matchdata.service';
import { matches } from '../matches';

@Component({
  selector: 'app-match-replay',
  templateUrl: './match-replay.component.html',
  styleUrls: ['./match-replay.component.css']
})
export class MatchReplayComponent implements OnInit {
  match;
  replayData;

  private player: AnimationPlayer;

  constructor(
    private route: ActivatedRoute,
    private matchdataService: MatchdataService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.match = matches.find(element => element.id == params.get('matchId'));
    });

    this.replayData = this.matchdataService.getReplayData(this.match.id);
  }

  log(temp) { 
    console.log(temp)
  }

  stringy(temp) {
    return JSON.stringify(temp);
  }
}