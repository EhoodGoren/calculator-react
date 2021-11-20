import React from "react";

export default class Operations extends React.Component {
    renderOperations(operations){
        return operations.map(operation => {
            const opId = opLiteral[operation];
            return <button
                        id={opId}
                        className="operations"
                        onClick={() => this.props.onClick(operation)}
                    >{operation}</button>
        })
    }

    render() {
        return (
            <>
                {this.renderOperations(['+', '-', 'X', '/', '='])}
                <button
                    id="clear"
                    className="operations"
                    onClick={() => this.props.onClick('AC')}
                >AC</button>
                <button
                    id="dot"
                    className="numbers"
                    onClick={() => this.props.onClick('.')}
                >.</button>
            </>
        )
    }
}

const opLiteral = {
    '+': 'add',
    '-': 'abstract',
    'X': 'multiply',
    '/': 'divide',
    '=': 'equals'
}
