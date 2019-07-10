import React, {Component} from "react";
import first from "../../img/first.png";

class Body extends Component {
    render(){
        return(
        <section id="welcome">
            <div className="welcome-wrapper">
                <div className="welcome col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
                    <div className="img-wrapper">
                        <img src={first}/>
                    </div>
                    <div className="welcome-title">
                        <h1>Welcome to Fit-app</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra aliquet eget sit amet tellus. Molestie at elementum eu facilisis sed. Integer vitae justo eget magna fermentum iaculis eu non diam. Eleifend donec pretium vulputate sapien nec sagittis. Amet consectetur adipiscing elit duis tristique. Cras adipiscing enim eu turpis egestas pretium aenean. Dignissim enim sit amet venenatis urna. In ante metus dictum at tempor commodo. Nulla malesuada pellentesque elit eget gravida. Turpis egestas maecenas pharetra convallis posuere morbi. Suscipit tellus mauris a diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra aliquet eget sit amet tellus. Molestie at elementum eu facilisis sed. Integer vitae justo eget magna fermentum iaculis eu non diam. Eleifend donec pretium vulputate sapien nec sagittis. Amet consectetur adipiscing elit duis tristique. Cras adipiscing enim eu turpis egestas pretium aenean. Dignissim enim sit amet venenatis urna. In ante metus dictum at tempor commodo..</p>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default Body;