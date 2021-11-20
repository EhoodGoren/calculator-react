import React from "react";
import CalcHead from './CalcHead';
import Numbers from './Numbers';
import Operations from './Operations';
import getOperatorFunc from './helpers/mathFunctions';

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: '',
            firstNum: '',
            secondNum: '',
            operatorFunc: null,
            result: ''
        };
    }

    chooseOperator = (operator) => {
        switch (operator) {
            case 'AC':
                this.setState({
                    display: '',
                    firstNum: '',
                    operatorFunc: null,
                    secondNum: '',
                    result: ''
                })
                break;
            case '.':
                /////////////////////////////////////////////////////////////////////////
                this.updateNumbers(operator);
                break;
            default:
                this.setState(prevState => ({
                    operatorFunc: getOperatorFunc(operator),
                    display: prevState.display.concat(operator)
                }));
                break;
        }
    }

    updateNumbers = (num) => {
        const state = this.state;
        if(!state.secondNum && !state.operatorFunc) {
            this.setState(prevState => ({
                firstNum: prevState.firstNum.concat(num),
                display: prevState.firstNum.concat(num)
            }));
        }
        else if(state.firstNum && state.operatorFunc) {
            this.setState(prevState => ({
                secondNum: prevState.secondNum.concat(num),
                display: prevState.display.concat(num)
            }));
        }
    }

    render() {
        return (
            <div id="calculator">
                <CalcHead display={this.state.display} result={this.state.result} />
                <Numbers onClick={this.updateNumbers} />
                <Operations onClick={this.chooseOperator} />
            </div>
        )
    }
}