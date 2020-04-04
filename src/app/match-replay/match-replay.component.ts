import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { matches } from '../matches';

@Component({
  selector: 'app-match-replay',
  templateUrl: './match-replay.component.html',
  styleUrls: ['./match-replay.component.css']
})
export class MatchReplayComponent implements OnInit {
  match;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.match = matches.find(element => element.id == params.get('matchId'));
    });
  }

}