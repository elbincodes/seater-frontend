import { SET_EVENTS } from "../actions/types";

const defaultState = {};

export default function events(state = defaultState, action) {
  switch (action.type) {
    case SET_EVENTS:
      console.log(action.payload);
      return {
        ...state,
        allevents: action.payload.events
      };

    default:
      return state;
  }
}
