import React, { Component } from "react";
import "./main.css";
import Items from "./items";

class Cart extends Component {
  state = {
    items: [
      {
        name: "mango",
        qty: 1,
        price: 10,
        total: 10
      },

      { name: "orange", qty: 1, price: 15, total: 15 },

      { name: "apple", qty: 4, price: 25, total: 100 }
    ],
    total: 125
  };

  add = (event, item) => {
    event.preventDefault();
    let flag = 0;
    this.state.items.forEach(i => {
      if (i.name === item.name) {
        alert("this item already exists");
        flag = 1;
      }
    });
    if (!flag) {
      this.state.items.push(item);
      this.getTotal();
      this.setState({
        items: this.state.items
      });
    }
  };

  plusItem = index => {
    let items = [...this.state.items];
    items[index].qty += 1;
    items[index].total = items[index].qty * items[index].price;
    this.setState({
      items: items
    });
    this.getTotal();
  };

  minusItem = index => {
    let items = this.state.items;
    if (items[index].qty > 1) {
      items[index].qty -= 1;
      items[index].total = items[index].qty * items[index].price;
      this.getTotal();
      this.setState({
        items: items
      });
    }
  };

  removeItem = index => {
    let items = this.state.items;
    items.splice(index, 1);
    this.getTotal();
    this.setState({
      items: items
    });
  };

  getTotal = () => {
    let total = 0;
    this.state.items.forEach(item => {
      total += item.total;
      this.setState({
        total: total
      });
    });
  };

  render() {
    return (
      <div>
        <Items
          items={this.state.items}
          add={this.add}
          plusItem={this.plusItem}
          minusItem={this.minusItem}
          removeItem={this.removeItem}
        />
        <h3>Grand Total : {this.state.total}</h3>
      </div>
    );
  }
}

export default Cart;
