import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";
import axios from "axios";
import tongue from "../../tongue.png";
import { connect } from "react-redux";
import { getUser } from "../ducks/reducer";

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
    this.handleRegister = this.handleRegister.bind(this);
  }
  handleRegister() {
    axios.post(`api/register`, {
      username: this.state.username,
      password: this.state.password
    });
  }
  handleLogin() {
    axios.post(`api/login`, {
      username: this.state.username,
      password: this.state.password
    });
  }

  render() {
    // console.log(this.state);
    return (
      <div className="auth-main">
        <div className="login-box">
          <img height="120px" src={tongue} alt="" />
          <h1> Helo</h1>
          <div className="inputs">
            Username:
            <input
              type="text"
              onChange={e => this.setState({ username: e.target.value })}
            />
            <br />
            <br />
            Password:
            <input
              type="text"
              onChange={e => this.setState({ password: e.target.value })}
            />
            <div className="login-buttons">
              <button onClick={() => this.handleLogin()}> Login</button>

              <button onClick={() => this.handleRegister()}> Register</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { getUser })(Auth);
