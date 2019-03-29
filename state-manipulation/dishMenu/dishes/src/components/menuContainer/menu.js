import React, { Component } from "react";
import "./main.css";
import sampleDishes from "./sampleDishes";
import Dishlist from "../dishes/dish";
import { from } from "rxjs";

class Menu extends Component {
  state = {
    dishes: sampleDishes
  };

  render() {
    console.log(this.state.dishes);
    return (
      <div className="App">
        <Dishlist dishes={this.state.dishes} />
      </div>
    );
  }
}

export default Menu;
