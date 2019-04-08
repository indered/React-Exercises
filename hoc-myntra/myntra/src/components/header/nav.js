import React, { Component } from "react";
import { Navbar } from "./styles.js";
export default class Nav extends Component {
  render() {
    return (
      <Navbar>
        <li>MEN</li>
        <li>WOMEN</li>
        <li>KIDS</li>
        <li>HOME & LIVING</li>
        <li>DISCOVER</li>
      </Navbar>
    );
  }
}
