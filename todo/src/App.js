import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Login from "./components/login/login";
import Todo from "./components/todo/todo";

class App extends Component {
  state = {
    user: {
      name: "yoyo",
      password: "1234",
      isAuth: "false"
    }
  };

  loginAuth = (e, user) => {
    e.preventDefault();
    console.log(user);
    let name = this.state.user.name === user.name;
    let password = this.state.user.password === user.password;
    console.log(this.state.user.name, user.name, password);
    if (name && password) {
      console.log("vi");
      this.setState(
        {
          user: { isAuth: "true" }
        },
        console.log(this.state.user.isAuth)
      );
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header ">
          <i className="fa fa-check-square App-logo " aria-hidden="true" />
          <h1>To Do</h1>
        </header>
        <p>Please login to continue.</p>

        <Router>
          <Route
            path="/"
            render={props => (
              <Login
                {...props}
                user={this.state.user}
                loginAuth={this.loginAuth}
              />
            )}
          />
          <Route
            path="/todo"
            component={Todo}
            // render={props =>
            //   this.state.isAuth ? <Todo /> : <Redirect to="/" />
            // }
          />
        </Router>
      </div>
    );
  }
}

export default App;
