import React, { Component } from "react";
import Moment from 'moment';

const Contact = React.createClass({

    itemClicked() {
        this.props.getThread(this.props.index);
    },
    render() {

        return (
            <li className={"list-group-item contact-item " + this.props.active} onClick={this.itemClicked}>
                <div className="pull-left hidden-xs contact-image">
                    <div>
                        <img width="48" src="/images/user1.png" />
                    </div>
                </div>
                <span className="pull-right text-muted time">
                    { Moment(this.props.contact.created_at).format('h:mma').toUpperCase().slice(0,-1)}
                </span>
                <div>
                    <div className="list-group-item-heading contact-name">
                        User1
                    </div>
                    <div className="list-group-item-text contact-message">
                        {this.props.contact.initial_message}
                    </div>
                    <div className="notification">2</div>
                </div>
            </li>
        );
    }
});

export default class UserList extends Component {

    render() {
        return (
            <div className="col-lg-4 no-padding user-list column">
                <div className="filter-bar">
                    <div className="pull-left">
                        <span className="filter">
                            <a href="#">Unanswered(2)</a>
                        </span>
                        <span className="filter"><a href="#">All</a></span>
                        <span className="filter"><a href="#">Me</a></span>
                    </div>
                    <div className="pull-right">
                        <span className="filter-action">
                            <img src="/images/icn_search.png" />
                        </span>
                        <span className="filter-action">
                            <img src="/images/volume-off-icon-small.png" />
                        </span>
                    </div>
                    <span className="clearfix" />
                </div>

                <div className="chat_list contacts">
                    {(() => {
                        if (this.props.data.fetchingContacts) {
                            return "Loading...";
                        } else {
                            let users = this.props.data.data.map((contact,i) => {
                                return <Contact key={i} active={(this.props.data.activeUser === i) ? 'selected':''} getThread={ this.props.getThread } index={i} contact={contact} />
                            })

                            return (
                                <ul className="list-group contacts-container">
                                    {users}
                                </ul>
                            );
                        }
                    })()}

                </div>
                <div className="user-list-footer">
                    <div className="chat-tabs">
                        <div className="tab-wrapper">
                            <div className="tab-item active">Conversations</div>
                        </div>
                        <div className="tab-wrapper">
                            <div className="tab-item">Team Chat</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
