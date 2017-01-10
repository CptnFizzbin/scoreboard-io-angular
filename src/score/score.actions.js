import {
  SET_SCORE_REL,
} from "../app.actions";

export function setScoreRel(playerId, relScore) {
  return {
    type: SET_SCORE_REL,
    payload: {
      playerId,
      relScore
    }
  };
}

export function incrementPlayerScore(playerId) {
  return setScoreRel(playerId, 1);
}

export function decrementPlayerScore(playerId) {
  return setScoreRel(playerId, -1);
}
