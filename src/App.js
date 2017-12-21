import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./actions/index";

import Login from "./components/Login";
import EventSelector from "./components/EventSelector";
import Event from "./components/Event";
import AttendingEvent from "./components/AttendingEvent";
import Rsvp from "./components/Rsvp";

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    if (name === "sign-in") {
      this.props.history.push("/login");
    }
    if (name === "sign-out") {
      this.handleLogout();
    }
  };

  handleLogout() {
    this.props.logoutUser(this.state, this.props.history);
  }

  componentDidMount = () => {
    this.props.fetchEvents();
  };

  render() {
    if (!this.props.events) {
      return <div> Loading </div>;
    }
    // console.log(this.props);
    const { activeItem } = this.state;

    // <Router>
    //     <div className="App">
    //       <Route exact path='/main'
    //         component={Main}
    //       />
    //       <Route exact path='/login'
    //         component={Login}
    //       />
    //       <Route exact path='/signup'
    //         component={SignUp}
    //       />
    //     </div>
    //   </Router>

    return (
      <Router>
        <div className="App">
          <Route exact path="/events" component={EventSelector} />
          <Route exact path="/events/:id" component={EventSelector} />

          <Route
            exact
            path="/events/:id/rsvp"
            render={({ match }) => {
              const rsvpEvent = this.props.events.find(
                eventObj => eventObj.id === parseInt(match.params.id, 10)
              );
              console.log("App.js rsvpEvent", rsvpEvent);
              return <Rsvp rsvpEvent={rsvpEvent} />;
            }}
          />

          <Route exact path="/users/:id/attending" component={AttendingEvent} />
          <div className="App">
            <Route exact path="/login" render={() => <Login />} />
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  console.log("APP.js state", state);
  return {
    users: state.users,
    loggedIn: state.users.loggedIn,
    events: state.events.allevents
  };
};

export default withRouter(connect(mapStateToProps, actions)(App));

// class App extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       user: {},
//       event: {},
//       events: {}
//     };
//   }
//
//   //   fetchUser = (username, password) => {
//   //   fetch(
//   //     `https://babling-backend.herokuapp.com/api/v1/users/login/${username}/${
//   //       password
//   //     }`
//   //   )
//   //     .then(resp => resp.json())
//   //     .then(user => this.props.setUser(user));
//   // };
//
//   // fetchUser = id => {
//   //   fetch(`http://localhost:3001/api/v1/users/${id}`)
//   //     .then(resp => resp.json())
//   //     .then(user => console.log(user));
//   // };
//
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to Seater!</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
//
// export default App;
