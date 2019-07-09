import React, { Component } from "react";
import { Link } from "react-router-dom";
import { LOGIN_PAGE, REGISTER_PAGE } from "../../common/common";
import { withRouter } from "react-router";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Navigation extends Component {
  render() {
    const {
      location: { pathname }
    } = this.props;
    let path = pathname.slice(1);
    return (
      <section id="header-section">
        <div id="shadow">
          <div className={`navigation-wrapper ${path}-nav`}>
            <div className="left-point">
              <div className="logo">
                <h1>
                  <Link to="/">FIT</Link>
                </h1>
              </div>
              <div className="nav-button">
                <ul className="navigation">
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Page</li>
                  <li>Blog</li>
                  <li>Contact US</li>
                </ul>
              </div>
            </div>
            <div className="right-point">
              <div className="wrapper">
                <div className="auth">
                  <ul className="navigation">
                    <li>
                      <Link to={LOGIN_PAGE}>Login</Link>
                    </li>
                    <li>
                      <Link to={REGISTER_PAGE}>SingUp</Link>
                    </li>
                  </ul>
                </div>
                <button className="program-button">Chose program</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Navigation.propTypes = {
  location: PropTypes.object
};
export default withRouter(connect()(Navigation));
