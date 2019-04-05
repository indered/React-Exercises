import React, { Component } from "react";
import injectContext from "../injectContext";

class Child2 extends Component {
  render() {
    return (
      <div>
        <h2>Child 2</h2>
        <p>
          child 2 is passed as a parameter to the hoc where it recieves context
          value in props.
        </p>
        <h3>User: {this.props.user.name}</h3>
        <h3>Password: {this.props.user.pass}</h3>
        {(() => this.props.log)()}
      </div>
    );
  }
}

export default injectContext(Child2);
