import {
  NEW_GAME,
  REMATCH,
  SET_SCORE_REL,
  ROUND_ENDING,
  ROUND_ENDED,
} from "../app.actions";

const initialState = {
  roundNumber: 1,
  roundActive: false,
  roundEnding: false
};

export default function round(state = initialState, action) {
  switch (action.type) {
    case NEW_GAME:
    case REMATCH:
      return {
        ...initialState,
      };
    case SET_SCORE_REL:
      return {
        ...state,
        roundActive: true,
        roundEnding: false
      };
    case ROUND_ENDING:
      return {
        ...state,
        roundEnding: true
      };
    case ROUND_ENDED:
      return {
        ...state,
        roundNumber: state.roundNumber + 1,
        roundActive: false,
        roundEnding: false
      };
    default:
      return state
  }
}
