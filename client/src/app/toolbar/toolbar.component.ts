import {Component} from '@angular/core';
import {PlayerService} from "../shared/player/player.service";

@Component({
  selector: 'sbio-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['toolbar.component.scss']
})
export class ToolbarComponent {
  constructor(private playerService: PlayerService) {}

  public clearScores() {
    this.playerService.clearScores();
  }

  public newGame() {
    this.playerService.clearScores();
    this.playerService.fetchAll(false);
  }
}
