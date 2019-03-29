import React, { Component } from "react";
import "./main.css";
import sampleDishes from "./sampleDishes";
import Dishlist from "../dishes/dish";

class Menu extends Component {
  state = {
    dishes: sampleDishes
  };

  add = (event, newDish) => {
    event.preventDefault();
    this.state.dishes.push(newDish);
    this.setState({
      dishes: this.state.dishes
    });
  };

  render() {
    return (
      <div className="menu">
        <Dishlist dishes={this.state.dishes} add={this.add} />
      </div>
    );
  }
}

export default Menu;
