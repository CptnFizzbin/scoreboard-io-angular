import {Component, OnInit} from '@angular/core';

import {Player, PlayerService} from "./shared/index";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PlayerService]
})
export class AppComponent implements OnInit {
  title = 'app works!';
  players:Player[] = [];

  constructor(private playerService:PlayerService) {}

  ngOnInit() {
    this.playerService
      .get()
      .subscribe(players => this.players = players);
  }
}
