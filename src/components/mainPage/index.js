import React from "react";
import Nav from '../navigator';
export default class Calendar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }
    componentDidMount(){
        console.log('Main');
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <Nav/>
            </div>
        )
    }
}