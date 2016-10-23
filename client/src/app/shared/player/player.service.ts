import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/throw';
import {Player} from "./player";
import {Subject} from "rxjs";

/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class PlayerService {

  private playerStore:Player[] = [];
  private maxPlayerId: number = 0;

  public players$: Subject<Player[]>;

  constructor(private http: Http) {
    this.players$ = new Subject<Player[]>();
    this.players$.subscribe(players => this.onPlayersChange(players));
    this.players$.next(JSON.parse(localStorage.getItem('sbio.players')) || []);
  }

  public fetchAll(keepExtraPlayers:boolean = true):void {
    this.http.get('/assets/data.json')
      .map((res: Response) => res.json())
      .map(json => json.players.map(player => new Player(player)))
      .catch(this.handleError)
      .subscribe((players) => {
        if (keepExtraPlayers) {
          players = this.mergeExistingPlayers(players);
        }

        this.players$.next(players)
      });
  }

  public clearScores():void {
    var players = [...this.playerStore];

    players.map((player: Player) => {
      player.score = 0;
      return player;
    });

    this.players$.next(players)
  }

  public setScore(playerId:number, newScore:number):void {
    var players = [...this.playerStore];

    players.map((player:Player) => {
        if (player.id === playerId) {
          player.score = newScore;
        }

        return player;
      });

    this.players$.next(players)
  }

  public addPlayer(player) {
    player.id = this.maxPlayerId + 1;
    this.players$.next([ ...this.playerStore, player]);
  }

  private onPlayersChange(players:Player[]) {
    this.playerStore = players;
    this.playerStore.forEach(player => {
      if (player.id > this.maxPlayerId) {
        this.maxPlayerId = player.id;
      }
    });

    localStorage.setItem('sbio.players', JSON.stringify(this.playerStore));
  }

  private mergeExistingPlayers(newPlayers:Player[]):Player[] {
    var allPlayers = [...this.playerStore];

    newPlayers.forEach(player => {
      var existingPlayer = allPlayers.find(p => p.id == player.id);

      if (existingPlayer) {
        Object.assign(existingPlayer, player, {
          score: existingPlayer.score
        });
      }
      else {
        allPlayers.push(player);
      }
    });

    return allPlayers;
  }

  /**
   * Handles HTTP error
   */
  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}

