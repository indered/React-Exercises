import React, { Component } from "react";
import "./style.css";
import { Redirect, Link } from "react-router-dom";
class Login extends Component {
  state = {
    user: {}
  };

  handleChange = e => {
    let user = {};
    user[e.target.name] = e.target.value;
    console.log(user);
    this.setState({
      user: user
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={e => this.props.loginAuth(e, this.state.user)}>
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter username (hint: yoyo)"
            onChange={this.handleChange}
            name="name"
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Password (hint: 1234)"
            onChange={this.handleChange}
            name="password"
          />
          <input variant="primary" type="submit" name="Login" value="Login" />
        </form>
      </div>
    );
  }
}

export default Login;
