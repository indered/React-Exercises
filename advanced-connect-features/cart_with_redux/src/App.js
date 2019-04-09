import React, { Component } from "react";
import Items from "./components/items";
import "./App.css";
import Cart from "./components/cart";

class App extends Component {
  add = () => {
    this.props.add();
  };

  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>TTN MART</h1>
        </header>
        <section>
          <Items className="items" />

          <Cart className="cart" />
        </section>
      </div>
    );
  }
}
export default App;
