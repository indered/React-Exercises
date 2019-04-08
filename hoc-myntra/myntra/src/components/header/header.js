import React, { Component } from "react";
import { Logo } from "./styles";
import Nav from "./nav";
import Search from "./search";
import SideNav from "./side-nav";

export default class Header extends Component {
  render() {
    return (
      <header className="clearfix header">
        <div>
          <Logo />
          <Nav />
          <SideNav />
          <Search />
        </div>
      </header>
    );
  }
}
