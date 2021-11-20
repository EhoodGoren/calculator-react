import React from "react";
import CalcHead from './CalcHead';
import Numbers from './Numbers';
import Operations from './Operations';

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div id="calculator">
                <CalcHead />
                <Numbers />
                <Operations />
            </div>
        )
    }
}