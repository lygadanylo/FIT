import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section id="home-wrapper">
        <div className="title-wrapper">
          <div className="title  col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <h1>Make your body</h1>
            <h1 className="title-2">beautiful,with our web-app</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
            <button className="get-button">Get in touch</button>
          </div>
        </div>
        <div className="welcome-wrapper">
          <div className="welcome col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9" />
        </div>
      </section>
    );
  }
}

export default Home;
