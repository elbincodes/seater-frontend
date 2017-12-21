import React from "react";
import * as actions from "../actions/index";
import { connect } from "react-redux";

import Event from "./Event";

// import Logout from "./Logout";
// import EventsContainer from "./EventsContainer";
// import NewEventContainer from "./NewEventContainer";
//
// const EventSelector = ({ user, setChat, redirect, setUser }) => {

class EventSelector extends React.Component {
  constructor(props) {
    super(props);
    // debugger;
  }

  componentDidMount = () => {
    // console.log(this.props.fetchEvents());
    console.log(this.props.fetchEvents());
  };
  // console.log(props.fetchEvents);
  render() {
    var x;
    // console.log("all events array", this.props.all_eventZ.allevents);

    x = this.props.all_eventZ.allevents;
    // console.log(x);
    return (
      <div>
        <h1>ALL Events:</h1>
        <br />
        <h3>Please select an event below for more information</h3>
        {this.props.all_eventZ.allevents
          ? x.map(el => (
              <li>
                {/* <a href={`events/${el.id}`}> {el.event_name} </a>{" "} */}
                <a href={`/events/${el.id}`}> {el.event_name} </a>{" "}
              </li>
            ))
          : null}
        {/* {console.log("XXXX", this.props)} */}
        <Event stuff={this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    all_eventZ: state.events
  };
};

export default connect(mapStateToProps, actions)(EventSelector);

// // below for inside the render return ?
// {
//   /* <Logout user={user} setUser={setUser} /> */
// }
// {
//   /* <EventsContainer user={user} setChat={setChat} redirect={redirect} /> */
// }
// {
//   /* <EventsContainer /> */
// }
// {
//   /* <NewEventContainer user={user} /> */
// }
