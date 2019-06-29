import React, { Component } from "react";
import { create } from "../../action/action";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import cancel from "../../img/cancel.png";
import checked from "../../img/checked.png";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      last_name: "",
      email: "",
      password: ""
    };
  }
  onNameChange = name => {
    this.setState({ name: name.target.value });
  };
  onLastNameChange = last_name => {
    this.setState({ last_name: last_name.target.value });
  };
  onEmailChange = email => {
    this.setState({ email: email.target.value });
  };
  onPasswordChange = password => {
    this.setState({ password: password.target.value });
  };
  createUser = () => {
    const { name, last_name, email, password } = this.state;
    const { create } = this.props;
    console.log(this.props);
    const user = {
      name,
      last_name,
      email,
      password
    };
    console.log(user);
    create(user);
    this.setState({
      name: "",
      last_name: "",
      email: "",
      password: ""
    });
  };
  render() {
    const { name, last_name, email, password } = this.state;
    const { message } = this.props;
    console.log(message)
    return (
      <section className="register-wrapper">
        <div className="register ">
          <div className="register-fields col-12 col-sm-8 col-md-6 col-lg-6 col-xl-6">
            <h1>Sing Up</h1>
            <div className="field">
              <input
                value={name}
                onChange={this.onNameChange}
                type="text"
                className="input-field"
                placeholder="Name"
              />
            </div>
            <div className="field">
              <input
                value={last_name}
                onChange={this.onLastNameChange}
                type="text"
                className="input-field"
                placeholder="Last Name"
              />
            </div>
            <div className="field">
              <input
                value={email}
                onChange={this.onEmailChange}
                type="text"
                className="input-field"
                placeholder="Email"
              />
            </div>
            <div className="field">
              <input
                value={password}
                onChange={this.onPasswordChange}
                type="text"
                className="input-field"
                placeholder="Password"
              />
            </div>
            <div className="field">
              <button className="create-account-button" onClick={this.createUser}>Create Account</button>
            </div>
            <div className="change-button-login">
                <h2>Login</h2>
            </div>
          </div>
        </div>
        
      </section>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  const { message } = state;
  return {
    message
  };
};

const mapDispatchToProps = {
  create
};

Register.propTypes = {
  create: PropTypes.func,
  message: PropTypes.bool
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
