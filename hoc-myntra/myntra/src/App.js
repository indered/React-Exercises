import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/header";
import Carousel from "./components/carousel/carousel";
import HotDeals from "./components/hotDeals/hotDeals";
import Brands from "./components/brandsInFocus/brandsInFocus";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Carousel className="carousel" />
        <HotDeals />
        <Brands className="brands" />
      </div>
    );
  }
}

export default App;
