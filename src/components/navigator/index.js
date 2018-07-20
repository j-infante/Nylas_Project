import React from "react";

export default class Nav extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }
    componentDidMount() {
        console.log('Main');
    }

    render() {
        return (
            <div>

                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    </div>
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/calendar">Calendar</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/email">Email</a>
                        </li>
                    </ul>
                </nav>

            </div>
        )
    }
}