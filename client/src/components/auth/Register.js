import React, { Component } from "react";
import { register } from "../../action/action";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import isEqual from "lodash/isEqual";

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

  componentDidUpdate(prevProps) {
    const { user } = this.props;
    if (!isEqual(prevProps.user, user)) {
      const { history } = this.props;
      history.push("/profile");
    }
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
    const { register } = this.props;
    const user = {
      name,
      last_name,
      email,
      password
    };
    register(user);
    this.setState({
      name: "",
      last_name: "",
      email: "",
      password: ""
    });
  };
  render() {
    const { name, last_name, email, password } = this.state;
    return (
      <section className="auth-wrapper">
        <div className="auth ">
          <div className="auth-fields col-12 col-sm-8 col-md-6 col-lg-6 col-xl-6">
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
                type="password"
                className="input-field"
                placeholder="Password"
              />
            </div>
            <div className="field">
              <button className="create-auth-button" onClick={this.createUser}>
                Create Account
              </button>
            </div>
            <div className="change-button-login">
              <Link to="/login">
                <h2>Login</h2>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  const { user } = state;
  return {
    user
  };
};

const mapDispatchToProps = {
  register
};

Register.propTypes = {
  history: PropTypes.object,
  register: PropTypes.func
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
