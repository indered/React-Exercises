import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';

class App extends Component {

  // state = {
  //   count1: 0,
  //   count2: 0,
  //   count3: 0
  // }

  // increaseAll() {
  //   this.setState({
  //     count1: ++this.state.count1,
  //     count2: ++this.state.count2,
  //     count3: ++this.state.count3
  //   });
  // }

  // decreaseAll() {
  //   this.setState({
  //     count1: --this.state.count1,
  //     count2: --this.state.count2,
  //     count3: --this.state.count3
  //   });
  //}


  render() {

    // let { count1, count2, count3 } = this.state;

    return (
      <div className="App">
        <Counter />
        <Counter />
        <Counter />
        <button className='btn' onClick={this.increaseAll}>+</button>
        <button className='btn' onClick={this.decreaseAll}>-</button>

      </div>
    );
  }
}

export default App;
