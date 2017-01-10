import {combineEpics} from 'redux-observable';

import scoreEpics from './score/score.epics';
import playerEpics from './player/player.epics';

const epics = combineEpics(
  scoreEpics,
  playerEpics,
);

export default epics;
