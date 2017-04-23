import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import Home from "./Home";
import "../../public/scss/style.scss";

class App extends Component {
    render() {
        return (
            <div className="page-container">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header pull-left">
                            <img
                                className="menu-toggle-switch"
                                src="/images/Hamburger.png"
                            />
                        </div>
                        <div className="navbar-header pull-right">
                            <p className="navbar-text profile-name">
                                Martha Gandron{" "}
                            </p>
                            <span>
                                <img
                                    className="profile-image"
                                    src="/images/Avatar.png"
                                />
                            </span>
                        </div>
                    </div>
                </nav>
                <Route pattern="/" component={Home} />
            </div>
        );
    }
}

export default connect()(App);
