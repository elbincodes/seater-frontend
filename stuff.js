import React from "react";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions/index";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      error: false,
      fields: {
        email: "",

        password: ""
      }
    };
  }

  handleChange = e => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: newFields });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.loginUser(this.state, this.props.history);
  };

  handleCreate = () => {
    this.props.history.push(`/create`);
  };

  // !!!!!!!!!!!!!!!!!!! api/index/js is currently going to url/users/1 instead of auth

  render() {
    return (
      <div>
        <h1> Welcome to Seater!</h1>
        <h2> Please login to choose your seat for an event</h2>
        <br />
        <br />
        <form onSubmit={this.handleSubmit}>
          email: <input type="text" name="email" value={this.state.email} />
          <br />
          password:{" "}
          <input type="password" name="password" value={this.state.password} />
          <br />
          <button type="Submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default withRouter(connect(mapStateToProps, actions)(Login));
