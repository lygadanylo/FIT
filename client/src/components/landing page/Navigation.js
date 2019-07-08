import React, {Component} from "react";

class Navigation extends Component {
    render(){
        return(
        <section id="header-section">
            <div id="shadow">
                <div className="navigation-wrapper">
                    <div className="left-point">
                        <div className="logo">
                            <h1>FIT</h1>
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
                        <div className="auth-wrapper">
                            <div className="auth">
                                <ul className="navigation">
                                    <li>Login</li>
                                    <li>SingUp</li>
                                </ul>
                            </div>
                            <button className="program-button">
                                Chose program
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default Navigation;