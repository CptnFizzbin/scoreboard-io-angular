import { ADD_PLAYER } from './players.actions';
import {NEW_GAME} from "../app.actions";

let initialState = [
];

export default function players(state = initialState, action) {
  switch (action.type) {
    case ADD_PLAYER:
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
