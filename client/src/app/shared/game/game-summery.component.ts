import {Component, Input} from "@angular/core";
import {Player} from "../player/player";
import {PlayerScore} from "../player/player-score";

@Component({
  selector: 'sbio-game-summery',
  templateUrl: 'game-summery.component.html',
  styleUrls: ['game-summery.component.scss']
})
export class GameSummeryComponent {
  @Input()
  placements: PlayerScore[];

  @Input()
  players: Player[];

  public get sortedPlacements() {
    return this.placements.sort((a,b) => {
      return a.placement - b.placement;
    })
  }

  public getPlayersInPlacement(placement:number) {
    return this.placements
      .filter(p => p.placement === placement)
      .map(p => this.getPlayer(p.playerId))
      .map(p => p.name)
      .join(', ')
  }

  public getPlayer(playerId):Player {
    return this.players.find(p => p.id === playerId);
  }
}
