import {Component, OnInit} from '@angular/core';

import {Player, PlayerService} from "./shared/index";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [PlayerService]
})
export class AppComponent implements OnInit {

  private _players: Observable<Player[]>;
  public get players() {
    return this._players
  }

  public playerPlacements: Map<number, number>;

  constructor(private playerService:PlayerService) {
    this._players = playerService.players$;
    this.playerPlacements = new Map<number, number>();

    this.players.subscribe(players => this.playersChanged(players));
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
      .sort((a,b) => b - a);

    players.forEach(player => {
      this.playerPlacements[player.id] = scores.indexOf(player.score) + 1;
    })
  }

  public getPlayerPlacement(player) {
    return this.playerPlacements[player.id];
  }
}
