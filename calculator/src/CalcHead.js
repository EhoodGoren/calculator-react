import React from "react";

export default class CalcHead extends React.Component {
    render() {
        return (
            <>
                <div id="input">{this.props.display}</div>
                <div id="result">{this.props.result}</div>
            </>
        )
    }
}
