import {Component, Output, EventEmitter} from "@angular/core";

import {Player} from "./player";

@Component({
  selector: 'sbio-add-player',
  templateUrl: 'add-player.component.html',
  styleUrls: ['add-player.component.scss']
})
export class AddPlayerComponent {
  @Output() onAddUser = new EventEmitter<Player>();

  newPlayer: Player;

  constructor() {
    this.clear();
  }

  protected addPlayer() {
    if (this.newPlayer.name.trim() != '') {
      this.onAddUser.emit(this.newPlayer);
    }
    this.clear();
  }

  private clear() {
    this.newPlayer = { name: '' }
  }
}
