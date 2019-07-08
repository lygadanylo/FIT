import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section id="home-wrapper">
        <div className="title-wrapper col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
          <h1>Make you body</h1>
          <h1>beautiful</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          </p>
        </div>
      </section>
    );
  }
}

export default Home;
