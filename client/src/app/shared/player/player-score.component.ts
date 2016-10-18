import {Component, Input, OnInit, EventEmitter} from "@angular/core";
import {Subject} from "rxjs";

import {Player} from "./player";
import {Output} from "@angular/core/src/metadata/directives";

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
  public placement: number;

  relScoreActive: Boolean = false;
  scoreSteam: Subject<number>;
  roundScore: number = 0;

  constructor () {
    this.scoreSteam = new Subject<number>();
    this.subscribeScoreSteam();
  }

  private subscribeScoreSteam () {
    this.scoreSteam
      .subscribe((relScore) => {
        this.relScoreActive = true;
        this.player.score += relScore;
        this.roundScore += relScore;
      });

    this.scoreSteam
      .debounceTime(ROUND_TIME)
      .subscribe(() => this.relScoreActive = false);

    this.scoreSteam
      .debounceTime(ROUND_TIME + ROUND_SCORE_FADE_TIME)
      .subscribe(() => this.roundScore = 0);
  }

  public addScore(amount: number) {
    this.scoreSteam.next(amount);
  }

  public removeScore(amount: number) {
    this.scoreSteam.next(amount * -1);
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
    return this.getOrdinalValue(this.placement);
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
