export class Player {
  public name: String;
  public score: number;

  constructor(player:any = {}) {
    this.name  = player.name || '';
    this.score = player.score || 0;
  }
}
