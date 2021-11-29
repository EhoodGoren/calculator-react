import React, { useEffect, useState } from "react";
import CalcHead from './CalcHead';
import Numbers from './Numbers';
import Operations from './Operations';
import getOperatorFunc from './helpers/mathFunctions';

export default function Calculator() {
    const [firstNum, setFirstNum] = useState('');
    const [secondNum, setSecondNum] = useState('');
    const [operator, setOperator] = useState('');
    const [result, setResult] = useState('');
    const [display, setDisplay] = useState('');

    // Updates calc display when one of the numbers or the operator changes.
    useEffect(() => {
        setDisplay(firstNum+operator+secondNum);
    },[firstNum, secondNum, operator])

    // Calc reset function for AC button.
    const resetCalc = () => {
        setFirstNum('');
        setSecondNum('');
        setOperator('');
        setResult('');
        setDisplay('');
    }

    // Default function for operators. Selects it as opeartor and displays it if relevant.
    const selectOperator = (operator) => {
        if(checkExistingOperator()) return;
        setDisplay(display.concat(operator));
    }
    // Handles cases of a clicked operator when an operator has already been selected.
    const checkExistingOperator = () => {
        // check if an operator has already been selected
        // check if the operator is last (for changing)
    }
    

    /*
    const displayOperator = (operator) => {
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
    }*/

    const equals = () => {
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

    // Groups togethers functions for any clicked operator other than the basic 4.
    const specialOperatorsFuncs = {
        clear: resetCalc,
        // decimal: decimal
        // equals: equalsClicked
    }

    const updateNumbers = (num) => {
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

    return (
        <div id="calculator">
            <CalcHead display={display} result={result} />
            <Numbers onClick={updateNumbers} />
            <Operations arithmeticFunc={selectOperator} specialsFuncs={specialOperatorsFuncs} />
        </div>
    )
}