import {Component, Output, EventEmitter} from "@angular/core";

import {PlayerService} from "./player.service";
import {Player} from "./player";

@Component({
  selector: 'sbio-add-player',
  templateUrl: 'add-player.component.html',
  styleUrls: ['add-player.component.scss']
})
export class AddPlayerComponent {
  newPlayer: Player;

  constructor(private playerService:PlayerService) {
    this.clear();
  }

  protected addPlayer() {
    if (this.newPlayer.name.trim() != '') {
      this.playerService.addPlayer(this.newPlayer);
      this.clear();
    }
  }

  private clear() {
    this.newPlayer = new Player();
  }
}
