import React from "react";
import * as actions from "../actions/index";
import { connect } from "react-redux";
import Rsvp from "./Rsvp";

const Event = props => {
  if (props.stuff.all_eventZ.allevents) {
    var number = props.stuff.match.params.id || 4;
    // console.log("PPPP", number);

    var daEvent = props.stuff.all_eventZ.allevents.filter(function(obje) {
      return obje.id == number;
    });

    return (
      <div>
        {console.log("info for rsvp", daEvent, number)}
        <br />
        <h1>Event info:</h1>
        {console.log(props.stuff.all_eventZ.allevents)}
        <h1>
          <b>{daEvent[0].event_name} </b>
        </h1>
        {/* <h2>Event ID: {daEvent[0].id}</h2> */}
        <h2>
          Host: {daEvent[0].admin.first_name} {daEvent[0].admin.last_name}
        </h2>
        <h3>
          Email Host:
          <a href={`mailto:${daEvent[0].admin.email}`}>
            {daEvent[0].admin.email}
          </a>{" "}
        </h3>
        <h3>Number of Guests RSVP'ed: {daEvent[0].guests.length}</h3>
        <h3>
          Number of seats available:{" "}
          {daEvent[0].table_amount * daEvent[0].seats_per_table -
            daEvent[0].guests.length}
        </h3>
        <h3>
          <a href={`/events/${daEvent[0].id}/rsvp`} target="_top">
            Click here to RSVP
          </a>
        </h3>
        {/* <Rsvp /> */}
      </div>
    );
  } else {
    return <h1 />;
  }
};

export default Event;

// {props.stuff.all_eventZ.allevents.filter(function(obj) {
//   return obj.id == props.stuff.match.params.id;
// })}
