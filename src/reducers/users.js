import { LOGIN_USER, LOGOUT_USER } from "../actions/types";

const defaultState = {};

export default function users(state = defaultState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        first_name: action.payload.user.first_name,
        last_name: action.payload.user.last_name,
        id: action.payload.user.id,
        email: action.payload.user.email,
        loggedIn: true
      };
    case LOGOUT_USER:
      return { state };
    default:
      return state;
  }
}
