import React, { Component } from "react";
import { Link } from "react-router-dom";

import APIHandler from "./../api/handler";

export default class SignUp extends Component {
  state = {
    firstname: "Hanna",
    lastname: "M",
    username: "HannaM",
    email: "hanna@m.you",
    password: "12345"
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      await APIHandler.post("/signup", this.state);
      this.props.history.push("/signin");
    } catch (err) {
      console.error(err);
    }
  };

  handleChange = e => {
    console.log(e.target);
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, password, username, firstname, lastname } = this.state;
    return (
      <React.Fragment>
        <div className="auth-container">
          <form
            className="form"
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
          >
            <h3 className="text-center">Sign Up</h3>

            <div className="form-group">
              <label className="label" htmlFor="firstName">
                First name
              </label>
              <input
                className="form-control"
                id="firstname"
                type="text"
                name="firstname"
                placeholder="First name"
                defaultValue={firstname}
              />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="lastname">Lastname</label>
              <input
                className="form-control"
                id="lastname"
                type="text"
                name="lastname"
                placeholder="Last name"
                defaultValue={lastname}
              />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="email">Email</label>
              <input
                className="form-control"
                id="email"
                type="email"
                placeholder="Enter email"
                name="email"
                defaultValue={email}
              />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="password">
                Password
              </label>
              <input
                className="form-control"
                id="password"
                type="password"
                placeholder="Enter password"
                name="password"
                defaultValue={password}
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Sign Up
            </button>
            <p className="forgot-password text-right">
              Already registered <a href="/signIn">sign in?</a>
            </p>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
