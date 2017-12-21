import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";

const Rsvp = props => {
  console.log("hurrr", props);

  // shouldComponentUpdate() : This method determines if a re-rendering should occur or not. It is never called on initial rendering and it's always called before the render method.

  // componentWillUpdate() : This method is called as soon as shouldComponentUpdate returns true. It is called just before the component is rendered with new data.

  return (
    <div>
      <h1>RSVP Form:</h1>
      <h2>{props.rsvpEvent.event_name}</h2>
      <h3>hosted by {props.rsvpEvent.admin.first_name}</h3>
      <br />
      <h4>
        <div>
          <button
            onClick={() => {
              return props.callRsvper(
                props.rsvpEvent.admin.id,
                props.rsvpEvent.id
              );
            }}
          >
            {" "}
            RSVP
          </button>
          {/* the above is coming from mapsDipstach to props... but this is the more sugary way of doing it since its connected to props below */}
        </div>
        <h3>Guest List: </h3>
        {props.rsvpEvent.guests.map(function(person) {
          return (
            <ul>
              {person.first_name} {person.last_name}
            </ul>
          );
        })}
      </h4>
    </div>
  );
};
// const num = props.

const mapStateToProps = state => {
  return {
    // this_event: state.events.filter(function(obj) {
    //   // return obj.id === num;
    // })
  };
};
export default connect(mapStateToProps, actions)(Rsvp);
