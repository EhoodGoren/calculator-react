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
            operator: null,
            result: ''
        };
    }

    selectOperator = (operator) => {
        switch (operator) {
            case 'AC':
                this.setState({
                    display: '',
                    firstNum: '',
                    operator: null,
                    secondNum: '',
                    result: ''
                });
                break;
            case '.':
                /////////////////////////////////////////////////////////////////////////
                this.updateNumbers(operator);
                break;
            case '=':
                this.equals();
                break;
            default:
                this.displayOperator(operator);
                break;
        }
    }
    displayOperator = (operator) => {
        let display = this.state.display;
        if(!display) return;
        const lastChar = display[display.length - 1];
        display = Number(lastChar) || lastChar === '0'
        ? display.concat(operator)
        : display.slice(0, -1).concat(operator);
        this.setState({
            operator,
            display
        });
    }

    equals = () => {
        const state = this.state;
        const operatorFunc = getOperatorFunc(this.state.operator);
        const result = operatorFunc(Number(state.firstNum), Number(state.secondNum));
        this.setState(prevState => ({
            display: `${prevState.firstNum}${prevState.operator}${prevState.secondNum}`,
            result,
            operator: null,
            firstNum: '',
            secondNum: ''
        }));
    }

    updateNumbers = (num) => {
        const state = this.state;
        if(state.result){
            this.setState({
                display:'',
                result: ''
            })
        }
        if(!state.secondNum && !state.operator) {
            this.setState(prevState => ({
                firstNum: prevState.firstNum.concat(num),
                display: prevState.display.concat(num)
            }));
        }
        else if(state.firstNum && state.operator) {
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
                <Operations onClick={this.selectOperator} />
            </div>
        )
    }
}