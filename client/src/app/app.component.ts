import {Component, OnInit} from '@angular/core';

import {Player, PlayerService} from "./shared/index";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [PlayerService]
})
export class AppComponent implements OnInit {

  _players:Player[];
  public get players() {
    return this._players
  }

  public set players(players: Player[]) {
    this._players = players;
    this.scoreChanged();
  }

  _scores:number[];
  public set scores(value:number[]) {
    this._scores = value;
  }
  public get scores() {
    return this._scores;
  }

  constructor(private playerService:PlayerService) {
    this._players = [];
    this._scores = [];
  }

  ngOnInit() {
    this.loadData();

    this.playerService
      .get()
      .subscribe(players => {
        this.mergePlayers(players);
        this.scoreChanged();
      });
  }

  public clearScores() {
    this.players.forEach(player => player.score = 0);
    this.scoreChanged();
  }

  public newGame() {
    this.players = [];

    this.playerService
      .get()
      .subscribe(players => this.players = players);
  }

  public scoreChanged() {
    this.scores = this.players
      .map(player => player.score)
      .filter((e, i, arr) => arr.indexOf(e, i + 1) === -1) //Get unique values
      .sort((a, b) => a - b)
      .reverse();

    this.saveData();
  }

  public getPlayerPlacement(player) {
    return this.scores.indexOf(player.score) + 1;
  }

  protected addPlayer(newPlayer: Player) {
    this.players = [...this.players, newPlayer];
  }

  private mergePlayers(newPlayers:Player[]) {
    var players = [];

    newPlayers.forEach(newPlayer => {
      var playerFound = false;

      this.players.forEach(existingPlayer => {
        if (newPlayer.name === existingPlayer.name) {
          newPlayer.score = existingPlayer.score;
          playerFound = true;
        }
      });

      players.push(newPlayer);
    });

    this.players = players;
  }

  private saveData() {
    console.log('saved...');
    localStorage.setItem('sbio.players', JSON.stringify(this.players));
  }

  private loadData() {
    console.log('load...');
    this.players = JSON.parse(localStorage.getItem('sbio.players')) || [];
  }
}
