import React, { Component } from "react";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Profile from "./components/profile/profile";
import Navigation from "./components/landing page/Navigation";
import Footer from "./components/landing page/footer";
import Home from "./components/home";
import Notifications from "./components/Notification";
import { connect } from "react-redux";
import "./style/app.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  HOME_ROUTER,
  LOGIN_PAGE,
  REGISTER_PAGE,
  USER_PROFILE
} from "./common/common";

class App extends Component {
  render() {
    return (
      <Router basename="/">
        <div className="App">
          <Navigation />
          <Notifications />
          <Switch>
            <Route exact path={HOME_ROUTER} component={Home} />
            <Route exact path={REGISTER_PAGE} component={Register} />
            <Route exact path={LOGIN_PAGE} component={Login} />
            <Route exact path={USER_PROFILE} component={Profile} />
          </Switch>
          <Footer />
        </div>
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
