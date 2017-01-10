import {
  NEW_GAME,
  CREATE_PLAYER
} from "../app.actions";

let initialState = [
];

export default function players(state = initialState, action) {
  switch (action.type) {
    case CREATE_PLAYER:
      return [
        ...state,
        action.payload.newPlayer
      ];
    case NEW_GAME:
      return [];
    default:
      return state;
  }
}
