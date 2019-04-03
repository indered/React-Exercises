import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import BookList from "./components/books/book-list";
import Login from "./components/login/login";
import Book from "./components/books/book";
import sampleBooks from "./samplebooks";

const loginDetails = {
  name: "yoyo",
  password: "1234"
};

class App extends Component {
  state = {
    user: {
      isAuth: false
    },
    bookList: sampleBooks
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
          exact
          path="/book-list"
          render={() =>
            this.state.user.isAuth ? (
              <BookList
                toggleAuth={this.toggleAuth}
                isUserAuthed={this.state.user.isAuth}
                bookList={this.state.bookList}
              />
            ) : (
              <Redirect to="/" />
            )
          }
        />
        <Route
          exact
          path="/book-list/book/:id"
          render={props =>
            this.state.user.isAuth ? (
              <Book
                {...props}
                bookList={this.state.bookList}
                toggleAuth={this.toggleAuth}
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
