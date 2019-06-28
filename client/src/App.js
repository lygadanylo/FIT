import React, { Component } from "react";
import Register from "./components/auth/Register";
import { connect } from "react-redux";
import "./style/app.scss";

class App extends Component {
  render() {
    return (
      <section className="App">
        <Register />
      </section>
    );
  }
}

const mapStateToProps = state => {};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
