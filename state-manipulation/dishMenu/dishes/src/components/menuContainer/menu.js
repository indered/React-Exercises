import React, { Component } from "react";
import "./main.css";
import sampleDishes from "./sampleDishes";
import Dishlist from "../dishes/dish";
import { from } from "rxjs";

class Menu extends Component {
  state = {
    dishes: sampleDishes
  };

  add = (event, newDish) => {
    event.preventDefault();
    this.setState({
      dishes: [...this.state.dishes, newDish]
    });
  };

  render() {
    return (
      <div className="App">
        <Dishlist dishes={this.state.dishes} add={this.add} />
      </div>
    );
  }
}

export default Menu;
