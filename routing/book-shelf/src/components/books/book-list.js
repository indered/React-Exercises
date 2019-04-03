import React, { Component } from "react";
import "./book.css";

import { Link } from "react-router-dom";

export default class BookList extends Component {
  render() {
    return (
      <div id="container">
        <div className="head wrapper">
          <h1>My Shelf</h1>
          <button className="logout" onClick={this.props.toggleAuth}>
            Logout
          </button>
        </div>
        <div className="book-list wrapper">
          {this.props.bookList.map((book, i) => {
            return (
              <Link className="card-link" to={`/book-list/book/${i}`}>
                <div className="card">
                  <img src={book.thumbnailUrl} alt="book" />
                  <h2>{book.title}</h2>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}
