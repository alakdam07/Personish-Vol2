import React, { Component } from "react";
import { connect } from "react-redux";

export class PersonDetails extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <h1>Person's information</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { person: state.person.persons };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PersonDetails);
