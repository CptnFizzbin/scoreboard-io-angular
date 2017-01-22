import {
  ADD_PLAYER,
  SET_SCORE_REL,
  NEW_GAME,
  REMATCH,
  ROUND_ENDED,
} from "../app.actions";

let initialState = [
];

export default function scores(state = initialState, action) {
  switch(action.type) {
    case NEW_GAME:
      return [];
    case REMATCH:
      return [...state]
        .map((score) => {
          return {
            ...score,
            value: 0,
            roundScore: 0,
            scoreChanged: false,
            roundScores: [],
          }
        });
    case ROUND_ENDED:
      return [...state]
        .map((score) => {
          return {
            ...score,
            value: score.roundScores
              .reduce((sum, score) => {
                return sum + score.value
              }, score.roundScore),
            roundScore: 0,
            scoreChanged: false,
            roundScores: [
              ...score.roundScores,
              {
                round: action.roundNumber,
                value: score.roundScore,
              },
            ],
          }
        });
    case ADD_PLAYER:
      return [
        ...state,
        {
          id: state.reduce((maxId, score) => { return score.id > maxId ? score.id : maxId; }, 0),
          playerId: action.payload.playerId,
          value: 0,
          roundScore: 0,
          scoreChanged: false,
          roundScores: [],
        }
      ];
    case SET_SCORE_REL:
      return [...state]
        .map(score => {
          if (score.playerId === action.payload.playerId) {
            return {
              ...score,
              value: score.value + action.payload.relScore,
              roundScore: score.roundScore + action.payload.relScore,
              scoreChanged: true,
            };
          }
          return score;
        });
    default:
      return state;
  }
}
