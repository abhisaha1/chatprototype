import React, { Component } from "react";

const Message = React.createClass({
    render() {
        return (
            <li className={"message appeared " + this.props.direction}>
                <div className="avatar">
                    <img width="32" src={this.props.profileImage} />
                </div>
                <div className="text_wrapper">
                    <div className="text">{this.props.data.message}</div>
                </div>
            </li>
        );
    }
});

export default class Thread extends Component {
    render() {
        let transcript = [];

        if (this.props.data && this.props.data.length > 0) {
            transcript = this.props.data[this.props.activeUser].transcript || [
            ];
        }
        var user = "";
        let messages = "Nothing Found";
        let profileImage = "";
        if (transcript.length > 0) {
            messages = transcript.map((message, i) => {
                if (message.alias == user) {
                    //left
                    profileImage = "/images/Avatar.png";
                    return (
                        <Message
                            profileImage={profileImage}
                            key={i}
                            data={message}
                            direction="left"
                        />
                    );
                } else {
                    //right
                    profileImage = "/images/user1.png";
                    user = message.alias;
                    return (
                        <Message
                            profileImage={profileImage}
                            key={i}
                            data={message}
                            direction="right"
                        />
                    );
                }
            });
        }
        return (
            <div className="col-lg-4 thread no-padding column">
                <ul className="messages">
                    {messages}
                </ul>
                <div className="thread-footer">
                    <div className="chat-tabs">
                        <div className="tab-wrapper">
                            <div className="tab-item active">Reply</div>
                        </div>
                        <div className="tab-wrapper">
                            <div className="tab-item">Note</div>
                        </div>
                        <div className="tab-wrapper">
                            <div className="tab-item">Transfer</div>
                        </div>
                    </div>
                    <div
                        contentEditable="true"
                        placeholder="Enter text here..."
                    />
                    <div className="emoji-wrapper">Emoji section</div>
                </div>
            </div>
        );
    }
}
