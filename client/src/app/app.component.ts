import {Component, OnInit} from '@angular/core';

import {Player, PlayerService} from "./shared/index";
import {Observable} from "rxjs";
import {PlayerScore} from "./shared/player/player-score";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [PlayerService]
})
export class AppComponent implements OnInit {

  public players: Observable<Player[]>;
  public playerPlacements: PlayerScore[];

  constructor(private playerService:PlayerService) {
    this.players = this.playerService.players$;
    this.playerPlacements = [];

    this.players.subscribe(players => {
      this.playersChanged(players);
    });
  }

  ngOnInit() {
    this.playerService.fetchAll();
  }

  public clearScores() {
    this.playerService.clearScores();
  }

  public newGame() {
    this.playerService.clearScores();
    this.playerService.fetchAll(false);
  }

  public playersChanged(players:Player[]) {
    var scores = [...players]
      .map(player => player.score)
      .filter((v, i, a) => a.indexOf(v) === i) //select unique
      .sort((a, b) => b - a);

    this.playerPlacements = [...players]
      .map(player => {
        return {
          playerId: player.id,
          score: player.score,
          placement: scores.indexOf(player.score) + 1
        };
      });
  }

  public getPlayerScore(player) {
    return this.playerPlacements
      .find(ps => ps.playerId === player.id);
  }
}
