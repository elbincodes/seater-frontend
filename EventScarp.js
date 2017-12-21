import React from "react";
import * as actions from "../actions/index";
import { connect } from "react-redux";

class Event extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount = () => {
  //   console.log("did mount", this.props.fetchEvents());
  // };

  // getEventArray = () => {
  //   console.log("inside get event array");
  // };
  //
  // componentWillReceiveProps(nextProps) {
  //   console.log("inside component will receive props");
  //   console.log("this.props is", this.props);
  //   console.log("next props is", nextProps);
  //   console.log("conditional is", this.props.show_events.length > 0);
  //   console.log("-------------------");
  //   if (this.props.show_events.length > 0) {
  //     this.getEventArray();
  //   }
  // }
  render() {
    console.log("xxxxx", this.props.stuff);
    // console.log("props", this.props)
    // console.log("rendering event component");
    // console.log("---------------------");

    // let num = this.props.match.params.id;
    // console.log(this.props);
    // let q;
    // if (!!this.props.show_events.allevents) {
    //   q = this.props.show_events.allevents;
    // }
    // console.log(q);

    let x = this.props.show_events.allevents;
    // let y = this.props.show_events.allevents.find(ev => ev.id == 4);
    // console.log("stuff", y);

    // let x = this.props.show_events.allevents.filter(event => event.id === num);

    return (
      <div>
        <br />
        <br />
        <br />
        <h1>Event Info:</h1>
        This is event number: <b />
        <br />
        <br />
        These are the guests:
        <br />
        <br />
        <br />
        {/* {this.props.show_events.allevents
          ? x.map(el => <li>{el.event_name}</li>)
          : null} */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    show_events: state.events
  };
};

export default connect(mapStateToProps, actions)(Event);

// {this.props.show_events.allevents
//   ? x.filter(ev => <div>{ return ev.id === num}</div>)
//   : null}

// return (
//   <div>
//     <br />
//     <br />
//     <br />
//     <h1>Event Info:</h1>
//     This is event number: {num}
//     <br />
//     These are the guests:
//     <br />
//     <br />
//     <br />
//     {this.props.show_events.allevents
//       ? x.map(el => (
//           <li>
//             {el.event_name}
//           </li>
//         ))
//       : null}
//   </div>
// );
