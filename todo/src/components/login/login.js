import React, { Component } from "react";
import "./style.css";
import { Redirect } from "react-router-dom";
class Login extends Component {
  state = {
    user: {}
  };

  handleChange = e => {
    let user = { ...this.state.user };
    user[e.target.name] = e.target.value;
    this.setState({
      user: user
    });
  };

  render() {
    if (this.props.isUserAuthed) return <Redirect to="/todo" />;

    return (
      <div>
        <p>Please login to continue.</p>
        <form
          className="login-form"
          onSubmit={e => this.props.loginAuth(e, this.state.user)}
        >
          <label>Username</label>
          <input
            type={"text"}
            placeholder="Enter username (hint: yoyo)"
            onChange={this.handleChange}
            name="name"
          />

          <label>Password</label>
          <input
            type={"password"}
            placeholder="Password (hint: 1234)"
            onChange={this.handleChange}
            name="password"
          />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default Login;
