import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Todo from "./components/todo/todo";
import Login from "./components/login/login";

const loginDetails = {
  name: "yoyo",
  password: "1234"
};

class App extends Component {
  state = {
    user: {
      isAuth: false
    }
  };

  loginAuth = (e, user) => {
    e.preventDefault();
    let name = loginDetails.name === user.name;
    let password = loginDetails.password === user.password;
    if (name && password) {
      this.setState({
        user: {
          isAuth: true
        }
      });
    }
  };

  toggleAuth = () => {
    this.setState({
      user: {
        isAuth: !this.state.user.isAuth
      }
    });
  };

  render() {
    return (
      <Router>
        <header className="App-header ">
          <i className="fa fa-check-square App-logo " aria-hidden="true" />
          <h1>To Do</h1>
        </header>
        <Route
          exact
          path="/"
          render={() => (
            <Login
              loginAuth={this.loginAuth}
              isUserAuthed={this.state.user.isAuth}
            />
          )}
        />
        <Route
          path="/todo"
          render={() =>
            this.state.user.isAuth ? (
              <Todo
                toggleAuth={this.toggleAuth}
                isUserAuthed={this.state.user.isAuth}
              />
            ) : (
              <Redirect to="/" />
            )
          }
        />
      </Router>
    );
  }
}

export default App;
