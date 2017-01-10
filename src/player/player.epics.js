import 'rxjs/add/operator/map';

import {combineEpics} from "redux-observable";

import {
  CREATE_PLAYER,
} from "../app.actions";
import {
  addPlayer,
} from './player.actions';

function createPlayerEpic(action$, store) {
  return action$.ofType(CREATE_PLAYER)
    .map(() => {
      let players = store.getState().players;
      let lastIndex = players.length - 1;
      let newPlayerId = players[lastIndex].id;

      return addPlayer(newPlayerId);
    });
}

const playerEpics = combineEpics(
  createPlayerEpic
);

export default playerEpics;
