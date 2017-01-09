import {ADD_PLAYER} from "../player/players.actions";
import {RESET_SCORES, INCREMENT_PLAYER_SCORE, DECREMENT_PLAYER_SCORE} from "./score.actions";
import {NEW_GAME} from "../app.actions";

let initialState = [
  {
    id: 1,
    playerId: 1,
    value: 0,
    roundScore: 0
  },
  {
    id: 2,
    playerId: 2,
    value: 0,
    roundScore: 0
  },
  {
    id: 3,
    playerId: 3,
    value: 0,
    roundScore: 0
  }
];

export default function scores(state = initialState, action) {
  switch(action.type) {
    case ADD_PLAYER:
      return [
        ...state,
        {
          id: state.reduce((maxId, score) => { return score.id > maxId ? score.id : maxId; }, 0),
          playerId: action.payload.newPlayer.id,
          value: 0
        }
      ];
    case RESET_SCORES:
      return [...state]
        .map((score) => {
          return {
            ...score,
            value: 0
          }
        });
    case INCREMENT_PLAYER_SCORE:
      return [...state]
        .map(score => {
          if (score.playerId === action.payload.playerId) {
            return {
              ...score,
              value: score.value + 1,
              roundScore: score.roundScore + 1
            };
          }
          return score;
        });
    case DECREMENT_PLAYER_SCORE:
      return [...state]
        .map(score => {
          if (score.playerId === action.payload.playerId) {
            return {
              ...score,
              value: score.value - 1,
              roundScore: score.roundScore - 1
            };
          }
          return score;
        });
    case NEW_GAME:
      return [];
    default:
      return state;
  }
}
