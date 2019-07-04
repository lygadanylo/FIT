import React, { Component } from "react";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Profile from "./components/profile/profile"
import { connect } from "react-redux";
import "./style/app.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LOGIN_PAGE, REGISTER_PAGE,USER_PROFILE } from "./common/common";

class App extends Component {
  render() {
    return (
      <Router basename="/">
        <section className="App">
          <div className="app-bgn">
            <Switch>
              <Route exact path={REGISTER_PAGE} component={Register} />
              <Route exact path={LOGIN_PAGE} component={Login} />
              <Route exact path={USER_PROFILE} component={Profile} />
            </Switch>
          </div>
        </section>
      </Router>
    );
  }
}

const mapStateToProps = state => {};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
