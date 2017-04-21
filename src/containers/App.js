import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreators from "../redux/actions/ActionCreators";
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
                                Marthaaa Gandron{" "}
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
                <div>
                    {React.cloneElement(this.props.children, this.props)}
                </div>
            </div>
        );
    }
}

export default connect()(App);
