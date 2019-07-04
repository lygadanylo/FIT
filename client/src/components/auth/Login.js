import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { login } from "../../action/action";
import isEqual from "lodash/isEqual";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  componentDidUpdate(prevProps) {
    const {user} = this.props;
    if(!isEqual(prevProps.user , user)){
      const{history} = this.props;
      history.push("/profile");
    }
    console.log(user);
  }

  onEmailChange = email => {
    this.setState({ email: email.target.value });
  };

  onPasswordChange = password => {
    this.setState({ password: password.target.value });
  };

  checkUser = () => {
    const { email, password } = this.state;
    const { login } = this.props;
    const user = {
      email,
      password
    };
    login(user);
    console.log(user);
    this.setState({
      email: "",
      password: ""
    });
  };
  render() {
    const { email, password } = this.state;
    return (
      <section className="auth-wrapper">
        <div className="auth">
          <div className="auth-fields col-12 col-sm-8 col-md-6 col-lg-6 col-xl-6">
            <h1>Sing In</h1>
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
              <button className="create-auth-button" onClick={this.checkUser}>
                Sing In
              </button>
            </div>
            <div className="change-button-login">
              <Link to="/register">
                <h2>Register</h2>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  const{user}= state;
  return{user};

};
const mapDispatchToProps = {
  login
};

Login.propTypes = {
  history: PropTypes.object,
  user: PropTypes.object,
  login: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
