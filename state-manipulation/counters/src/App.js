import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';

class App extends Component {

  state = {
    counters: [0, 0, 0, 0]
  }

  inCounter = index => {
    let temp_counter = [...this.state.counters];
    if (index) {
      temp_counter[index]++;
    }

    else {
      temp_counter = temp_counter.map(e => ++e);
    }

    this.setState({
      counters: temp_counter
    });

  }

  decCounter = index => {
    let temp_counter = [...this.state.counters];
    if (index) {
      temp_counter[index]--;
    }

    else {
      temp_counter = temp_counter.map(e => --e);
    }

    this.setState({
      counters: temp_counter
    });

  }


  render() {
    return (
      <div className="App" >
        {
          this.state.counters.map((counter, index) => {
            return (
              <Counter
                counter={counter}
                index={index}
                inCounter={this.inCounter}
                decCounter={this.decCounter}
              />);
          })
        }
        < button className='btn' onClick={() => this.inCounter()} > +</button >
        <button className='btn' onClick={() => this.decCounter()}>-</button>
      </div >
    );
  }
}

export default App;
