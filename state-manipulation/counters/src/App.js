import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';

class App extends Component {

  state = {
    count1: 0,
    count2: 0,
    count3: 0
  }

  inCounter = (counter, count) => {
    this.setState({
      [counter]: ++count
    });

  }
  decCounter = (counter, count) => {
    this.setState({
      [counter]: --count
    });
  }

  increaseAll = () => {
    this.setState({
      count1: ++this.state.count1,
      count2: ++this.state.count2,
      count3: ++this.state.count3
    });
  }

  decreaseAll = () => {

    this.setState({
      count1: --this.state.count1,
      count2: --this.state.count2,
      count3: --this.state.count3
    });
  }


  render() {



    return (
      <div className="App">
        <Counter count={this.state.count1} increase={() => this.inCounter('count1', this.state.count1)} decrease={() => this.decCounter('count1', this.state.count1)} />
        <Counter count={this.state.count2} increase={() => this.inCounter('count2', this.state.count2)} decrease={() => this.decCounter('count2', this.state.count2)} />
        <Counter count={this.state.count3} increase={() => this.inCounter('count3', this.state.count3)} decrease={() => this.decCounter('count3', this.state.count3)} />
        <button className='btn' onClick={this.increaseAll}>+</button>
        <button className='btn' onClick={this.decreaseAll}>-</button>
      </div>
    );
  }
}

export default App;
