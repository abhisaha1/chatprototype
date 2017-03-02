import React, { Component } from "react";

export default class UserInfo extends Component {
    render() {
        let data = {}
        if (this.props.data && this.props.data.length > 0) {
            data = this.props.data[this.props.activeUser] || {}
        }
        return (
            <div className="col-lg-4 no-padding column">
                {(() => {
                    if (
                        this.props.data && this.props.data !== null
                    ) {
                        return (
                            <ul>
                                <li>Lat {data.latitude}</li>
                                <li>Long {data.longitude}</li>
                                <li>IP {data.ip_address}</li>
                            </ul>
                        )
                    }else{
                        return (<span>...</span>)
                    }
                })()}
            </div>
        );
    }
}
