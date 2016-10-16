import {Component, Input} from "@angular/core";
import {Player} from "./player";

@Component({
  selector: 'sbio-player-score',
  templateUrl: 'player-score.component.html',
  styleUrls: ['player-score.component.scss']
})
export class PlayerScoreComponent {
  @Input()
  public player: Player = {name: 'unknown'};
  @Input()
  public score: number = 0;

  public addScore(amount: number) {
    this.score += amount;
  }

  public removeScore(amount: number) {
    this.score -= amount;
  }
}
