import {combineReducers} from "redux";

import players from './player/players.reducer';
import scores from './score/scores.reducer';

const reducer = combineReducers({
  players,
  scores
});

export default reducer;
