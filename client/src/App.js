import React, { Component } from "react";
import Register from "./components/Register";
import { connect } from "react-redux";

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
