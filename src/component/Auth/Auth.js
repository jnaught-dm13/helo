import React, { Component } from "react";
import "./Auth.css";

class Auth extends Component {
  render() {
    return (
      <div className="auth-main">
        <div className="login-box">
          <div className="inputs">
            Username: <input type="text" />
            <br />
            Password: <input type="text" />
            <div className="login-buttons">
              <button> Login</button>
              <button> Register</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Auth;
