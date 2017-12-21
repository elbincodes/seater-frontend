const url = "http://localhost:3001/api/v1";

const headers = {
  "content-type": "application/json",
  accept: "application/json"
};

// no idea if below is correct.

export function onLogin(form) {
  // return fetch(`${url}/auth`, {
  return fetch(`http://localhost:3001/api/v1/login`, {
    method: "POST",
    headers,
    // what is use of form.fields
    body: JSON.stringify(form.fields)
  }).then(res => res.json());
}

export function getEvents() {
  return fetch(`${url}/events`).then(res => res.json());
}

export const rsvper = (guest_id, event_id) => {
  // console.log("hi");

  return fetch("http://localhost:3001/api/v1/guest_events", {
    method: "POST",
    body: JSON.stringify({
      guest_id: 2,
      event_id: event_id
    }),
    headers: { "Content-Type": "application/json" }
  }).then(res => res.json());
};
