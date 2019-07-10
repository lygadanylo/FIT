import React, {Component, Fragment} from "react";
import first from "../../img/first.png";
import central from "../../img/central.png";

class Body extends Component {
    render(){
        return(
        <section id="welcome">
            <div className="welcome-wrapper">
                <div className="welcome col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
                    <div className="img-wrapper col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <img src={first}/>
                    </div>
                    <div className="welcome-title">
                        <h1>Welcome to Fit-app</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra aliquet eget sit amet tellus. Molestie at elementum eu facilisis sed. Integer vitae justo eget magna fermentum iaculis eu non diam. Eleifend donec pretium vulputate sapien nec sagittis. Amet consectetur adipiscing elit duis tristique. Cras adipiscing enim eu turpis egestas pretium aenean. Dignissim enim sit amet venenatis urna. In ante metus dictum at tempor commodo. Nulla malesuada pellentesque elit eget gravida. Turpis egestas maecenas pharetra convallis posuere morbi. Suscipit tellus mauris a diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra aliquet eget sit amet tellus. Molestie at elementum eu facilisis sed. Integer vitae justo eget magna fermentum iaculis eu non diam. Eleifend donec pretium vulputate sapien nec sagittis. Amet consectetur adipiscing elit duis tristique. Cras adipiscing enim eu turpis egestas pretium aenean. Dignissim enim sit amet venenatis urna. In ante metus dictum at tempor commodo..</p>
                    </div>
                </div>
            </div>
            <div className="do-wrapper col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
                <div className="do-text col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                    <h1>What we do</h1>
                    <p className="first-line">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra aliquet eget sit amet tellus. Molestie at elementum eu facilisis sed. Integer vitae justo eget magna fermentum iaculis eu non diam. Eleifend donec pretium vulputate sapien nec sagittis. Amet consectetur adipiscing elit duis </p>
                    <p className="second-line">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra aliquet eget sit amet tellus. Molestie at elementum eu facilisis sed. Integer vitae justo eget magna fermentum iaculis eu non diam. Eleifend donec pretium vulputate sapien nec sagittis. Amet consectetur adipiscing elit duis </p>
                    <button className="get-button">Get in touch</button>
                </div>
                <div className="do-img">
                    <img src={central} />
                </div>
              
            </div>
        </section>
        );
    }
}

export default Body;