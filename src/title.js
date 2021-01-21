import React from "react";

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        }
    }
    render() {
        return <b>{this.state.value}</b>
    }
}


export default Title;