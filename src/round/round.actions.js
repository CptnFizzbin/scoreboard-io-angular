import {
  ROUND_STARTED,
  ROUND_ENDING,
  ROUND_ENDED
} from "../app.actions";

export function roundStarted() {
  return {
    type: ROUND_STARTED
  }
}

export function roundEnding() {
  return {
    type: ROUND_ENDING
  }
}

export function roundEnded() {
  return {
    type: ROUND_ENDED
  }
}
