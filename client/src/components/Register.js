import React, { Component } from "react";

class Register extends Component {
  render() {
    return (
      <section>
        <div className="register-wrapper">
          <div className="register">
            <h1>Register</h1>
            <div className="field">
              <h1>Name:</h1>
              <input type="text" className="input-field" placeholder="Name" />
            </div>
            <div className="field">
              <h1>Last Name:</h1>
              <input
                type="text"
                className="input-field"
                placeholder="Last Name"
              />
            </div>
            <div className="field">
              <h1>Email:</h1>
              <input type="text" className="input-field" placeholder="Email" />
            </div>
            <div className="field">
              <h1>Password:</h1>
              <input
                type="text"
                className="input-field"
                placeholder="Password"
              />
            </div>
            <div className="field">
              <button>Create Account</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Register;
