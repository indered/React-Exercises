import React, { Component } from "react";
import userContext from "./context";
import "./App.css";
import Child1 from "./child/child1";

class App extends Component {
  state = {
    user: { name: "yoyo", pass: "dunno" }
  };

  render() {
    return (
      <userContext.Provider value={this.state}>
        <div className="parent">
          <h1>Parent</h1>
          <p>
            {" "}
            Parent is setting its state in the context and is providing to the
            children.
          </p>
          <Child1 />
        </div>
      </userContext.Provider>
    );
  }
}

export default App;
