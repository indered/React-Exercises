import React, { Component } from "react";
// import userContext from "../context";
import Child2 from "./child2";

export default class Child1 extends Component {
  render() {
    return (
      <div>
        <h1>Child 1</h1>
        <p>Child 1 renders the child 2</p>
        <Child2 />
      </div>
    );
  }
}
