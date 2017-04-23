import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as ActionCreators from "../redux/actions/ActionCreators";
import UserList from "../components/UserList";
import Thread from "../components/Thread";
import UserInfo from "../components/UserInfo";
import siteConfig from "../../config/site.config";

class Home extends Component {
    constructor(props) {
        super(props);
    }
    static fetchData(props) {
        return ActionCreators.fetchChatData();
    }
    componentDidMount() {
        if (this.props.data.length == 0) {
            this.props.fetchChatData();
        }
    }

    render() {
        return (
            <div className="col-lg-12 no-padding">
                <UserList
                    getThread={this.props.getThread}
                    data={this.props.data}
                />

                <Thread
                    data={this.props.data.data}
                    activeUser={this.props.data.activeUser}
                />
                <UserInfo
                    data={this.props.data.data}
                    activeUser={this.props.data.activeUser}
                />

            </div>
        );
    }
}

const mapStateToProps = state => ({
    data: state.data
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            fetchChatData: ActionCreators.fetchChatData,
            getThread: ActionCreators.getThread
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
