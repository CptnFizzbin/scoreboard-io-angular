import {Component, Input, OnInit, EventEmitter, Output} from "@angular/core";
import {Subject} from "rxjs";

import {Player} from "./player";
import {PlayerService} from "./player.service";
import {PlayerScore} from "./player-score";

const ROUND_TIME = 2000;
const ROUND_SCORE_FADE_TIME = 2000;

@Component({
  selector: 'sbio-player-score',
  templateUrl: 'player-score.component.html',
  styleUrls: ['player-score.component.scss']
})
export class PlayerScoreComponent {
  @Input()
  public player: Player;
  @Input()
  public playerScore: PlayerScore;

  relScoreActive: Boolean = false;
  score$: Subject<number>;
  roundScore: number = 0;

  constructor (private playerService:PlayerService) {
    this.score$ = new Subject<number>();

    this.subscribeToScoreSteam();
  }

  private subscribeToScoreSteam () {
    //Things to do immediately when a score is updated.
    this.score$
      .subscribe((relScore) => {
        this.relScoreActive = true;

        var newScore = this.player.score + relScore;
        this.playerService.setScore(this.player.id, newScore);

        this.roundScore += relScore;
      });

    //Things to do when a round is starting to end.
    this.score$
      .debounceTime(ROUND_TIME)
      .subscribe(() => this.relScoreActive = false);

    //Things to do when a round has ended.
    this.score$
      .debounceTime(ROUND_TIME + ROUND_SCORE_FADE_TIME)
      .subscribe(() => this.roundScore = 0);
  }

  public addScore(amount: number) {
    this.score$.next(amount);
  }

  public removeScore(amount: number) {
    this.score$.next(amount * -1);
  }

  public get roundScoreString () {
    if (this.roundScore >= 0) {
      return '+' + this.roundScore.toString();
    }
    else {
      return this.roundScore.toString();
    }
  }

  public get placementString() {
    return this.getOrdinalValue(this.playerScore.placement);
  }

  private getOrdinalValue(value) {
    var ones = value % 10;
    var teens = value % 100;

    if (ones == 1 && teens != 11) {
      return value + "st";
    }
    if (ones == 2 && teens != 12) {
      return value + "nd";
    }
    if (ones == 3 && teens != 13) {
      return value + "rd";
    }
    return value + "th";
  }
}
