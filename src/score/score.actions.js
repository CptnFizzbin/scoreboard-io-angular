export const RESET_SCORES = 'scores.resetScores';
export const INCREMENT_PLAYER_SCORE = 'scores.incrementPlayerScore';
export const DECREMENT_PLAYER_SCORE = 'scores.decrementPlayerScore';

export function resetScores() {
  return {
    type: RESET_SCORES
  };
}

export function incrementPlayerScore(playerId) {
  return {
    type: INCREMENT_PLAYER_SCORE,
    payload: {playerId}
  };
}

export function decrementPlayerScore(playerId) {
  return {
    type: DECREMENT_PLAYER_SCORE,
    payload: {playerId}
  };
}
