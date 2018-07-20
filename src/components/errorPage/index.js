import React, { Component } from 'react'

class PageNotFound extends Component {
    render() {
        let { location } = this.props;

        return (
            <center >
                <h1>404 NOT FOUND</h1>
                <h2><code>{location.pathname}</code> cannot be found</h2>
            </center>
        )
    }
}
export default (PageNotFound)