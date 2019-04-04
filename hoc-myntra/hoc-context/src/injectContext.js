import React, { Component } from "react";
import userContext from "./context";

export default WrappedComponent => {
  return class User extends Component {
    static contextType = userContext;
    log = () => console.log(this.contextType);

    render() {
      return (
        <WrappedComponent
          {...this.props}
          user={this.context.user}
          log={this.log}
        />
      );
    }
  };
};
