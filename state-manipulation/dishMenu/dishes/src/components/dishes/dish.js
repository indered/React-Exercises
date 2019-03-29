import React, { Component } from "react";
import "./main.css";

class Dishlist extends Component {
  constructor(props) {
    super(props);
    this.newDish = {};
    this.handleChange = event => {
      this.newDish[event.target.name] = event.target.value;
    };
    this.clickHandler = dish => {
      console.log(dish);
    };
  }

  render() {
    let { dishes, add } = this.props;
    return (
      <div>
        <h1>MENU</h1>
        <ul>
          {dishes.map(dish => {
            return (
              <li onClick={() => this.clickHandler(dish)}>
                <h3>Name: {dish.name}</h3>
                <h3>Type: {dish.type}</h3>
                <h3>Price: {dish.price}</h3>
              </li>
            );
          })}
        </ul>
        <div className="form">
          <form
            className="addDishForm"
            onSubmit={event => add(event, this.newDish)}
          >
            <label>Name</label>
            <input
              onChange={this.handleChange}
              value={dishes.name}
              type="text"
              name="name"
            />
            <label>Type</label>
            <input
              onChange={this.handleChange}
              value={dishes.type}
              type="text"
              name="type"
            />
            <label>Price</label>
            <input
              onChange={this.handleChange}
              value={dishes.price}
              type="text"
              name="price"
            />
            <label>Status(available/unavailable)</label>
            <input
              onChange={this.handleChange}
              value={dishes.status}
              type="text"
              name="status"
            />
            <input
              type="submit"
              onChange={this.handleSubmit}
              name="Add"
              value="Add"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Dishlist;
