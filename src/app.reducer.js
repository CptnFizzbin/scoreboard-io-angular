import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";

import players from './player/players.reducer';
import scores from './score/scores.reducer';
import round from './round/round.reducer';

const reducer = combineReducers({
  routing: routerReducer,
  players,
  scores,
  round,
});

export default reducer;
