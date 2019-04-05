import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header.js';
import Main from './component/main';
import Footer from './component/footer';
import Aside from './component/aside';
class App extends Component {

  state = {
    counter: 0
  }

  inCounter = () => {

    this.setState({
      counter: ++this.state.counter
    })
  }
  reset = () => {

    this.setState({
      counter: 0
    })
  }



  render() {
    let { counter } = this.state;
    return (
      <div className="App" >
        <Header counter={counter} />
        <div className='content'>
          <Main counter={this.inCounter} reset={this.reset} />
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}


export default App;