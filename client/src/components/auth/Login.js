import React, { Component } from "react";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="auth-wrapper">
        <div className="auth">
          <div className="auth-fields col-12 col-sm-8 col-md-6 col-lg-6 col-xl-6">
            <h1>Sing In</h1>
            <div className="field">
              <input
                onChange={this.onNameChange}
                type="text"
                className="input-field"
                placeholder="Name"
              />
            </div>
            <div className="field">
              <input
                onChange={this.onLastNameChange}
                type="text"
                className="input-field"
                placeholder="Last Name"
              />
            </div>
            <div className="field">
              <input
                onChange={this.onEmailChange}
                type="text"
                className="input-field"
                placeholder="Email"
              />
            </div>
            <div className="field">
              <input
                onChange={this.onPasswordChange}
                type="text"
                className="input-field"
                placeholder="Password"
              />
            </div>
            <div className="field">
              <button className="create-auth-button" onClick={this.createUser}>
                Sing In
              </button>
            </div>
            <div className="change-button-login">
              <h2>Register</h2>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default connect()(Login);
