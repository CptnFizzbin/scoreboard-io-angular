import {store} from '../app';

export const ADD_PLAYER = 'players.addPlayer';

export function addPlayer(player) {
  let newPlayer = {
    ...player
  };

  return {
    type: ADD_PLAYER,
    payload: {
      newPlayer
    }
  }
}
