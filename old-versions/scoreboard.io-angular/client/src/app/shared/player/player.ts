export class Player {
  public id: number;
  public name: String;
  public score: number;

  constructor(player:any = {}) {
    this.id = player.id || -1;
    this.name  = player.name || '';
    this.score = player.score || 0;
  }
}
