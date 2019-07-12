import React, { Component } from "react";
import social1 from "../../img/facebook-logo-outline.png";
import social2 from "../../img/google-plus-outlined-logo-social-symbol.png";
import social3 from "../../img/instagram-social-outlined-logo.png";
import social4 from "../../img/linkedin-social-outline-logotype.png";
import social5 from "../../img/twitter-social-outlined-logo.png";
import social6 from "../../img/youtube-play-button-outlined-social-symbol.png";

class Footer extends Component {
  render() {
    return (
      <section id="footer">
        <div className="footer-wrapper">
          <div className="subscription col-12 col-sm-12 col-md-4 col-lg-4 col-lx-4">
            <div className="header">
              <h1>Fit</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="follow-field">
              <p>Follow us:</p>
              <a href="#">
                <img src={social1} />
              </a>
              <a href="#">
                <img src={social2} />
              </a>
              <a href="#">
                <img src={social3} />
              </a>
              <a href="#">
                <img src={social4} />
              </a>
              <a href="#">
                <img src={social5} />
              </a>
              <a href="#">
                <img src={social6} />
              </a>
            </div>
            <div className="subscription-field">
              <div className="form">
                <input placeholder="Your Email" className="filed" />
                <button className="get-button">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="blog-wrapper col-12 col-sm-12 col-md-4 col-lg-4 col-lx-4" />
        </div>
      </section>
    );
  }
}

export default Footer;
