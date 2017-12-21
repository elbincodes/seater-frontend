import { LOGIN_USER, LOGOUT_USER, SET_EVENTS } from "./types";
import { onLogin, getEvents, rsvper } from "../api/index";
// import { adapter } from "../services";

export function loginUser(user_params, history) {
  return function(dispatch) {
    onLogin(user_params).then(data => {
      if (data.error) {
        console.log("error");
      } else {
        // what is the need for token?
        console.log(data);
        localStorage.setItem("token", data.token);
        dispatch({ type: LOGIN_USER, payload: data });
        history.push("/events");
      }
    });
  };
}

// export const loginUser = (username, password, history) => dispatch => {
//   dispatch({ type: "ASYNC_START" });
//
//   adapter.auth.login({ username, password }).then(user => {
//     localStorage.setItem("token", user.jwt);
//     dispatch({ type: "SET_CURRENT_USER", user });
//     history.push("/home");
//   });
// };

export function logoutUser(user_params, history) {
  return function(dispatch) {
    localStorage.removeItem("token");
    dispatch({ type: LOGOUT_USER });
    history.push("/login");
  };
}

export function fetchEvents() {
  return function(dispatch) {
    getEvents().then(res => {
      if (res.error) {
        // cl
      } else {
        dispatch({ type: SET_EVENTS, payload: res });
      }
    });
  };
}

export function callRsvper(guest_id, event_id) {
  return function(dispatch) {
    rsvper(guest_id, event_id).then(res =>
      dispatch({ type: SET_EVENTS, payload: res })
    );
  };
}
