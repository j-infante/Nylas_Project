import React from "react";
import Nav from '../navigator';

export default class Email extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }


    componentDidMount() {
        console.log('Email');
    }

    render() {
        return (
            <div>
                <Nav/>
            </div>
        )
    }
}