import {combineReducers} from "redux";

import players from './player/players.reducer';
import scores from './score/scores.reducer';
import round from './round/round.reducer';

const reducer = combineReducers({
  players,
  scores,
  round
});

export default reducer;
