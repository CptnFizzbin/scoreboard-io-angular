export const NEW_GAME = 'sbio/newGame';
export const REMATCH = 'sbio/rematch';

export const CREATE_PLAYER = 'sbio/player/createPlayer';
export const ADD_PLAYER = 'sbio/player/addPlayer';

export const SET_SCORE_REL = 'sbio/score/setScoreRel';
export const SET_ROUND_SCORE = 'sbio/score/setRoundScore';

export const ROUND_STARTED = 'sbio/round/roundStarted';
export const ROUND_ENDING = 'sbio/round/roundEnding';
export const ROUND_ENDED = 'sbio/round/roundEnded';


export function newGame() {
  return {
    type: NEW_GAME
  }
}

export function rematch() {
  return {
    type: REMATCH
  }
}
