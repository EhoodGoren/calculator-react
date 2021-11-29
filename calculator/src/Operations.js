import React from "react";

export default function Operations(props) {
    const renderOperations = (operations) => {
        return operations.map(operation => {
            const opId = opLiteral[operation];
            return <button
                        id={opId}
                        className="operations"
                        onClick={() => props.arithmeticFunc(operation)}
                    >{operation}</button>
        })
    }

    const renderClear = () => {
        return <button
            id="clear"
            className="operations"
            onClick={() => props.specialsFuncs.clear()}
        >AC</button>
    }

    const renderDecimal = () => {
        return <button
                    id="decimal"
                    className="numbers"
                    onClick={() => props.specialsFuncs.decimal()}
                >.</button>
    }

    const renderEquals = () => {
        return <button
                    id="equals"
                    className="operations"
                    onClick={() => props.specialsFuncs.equals()}
                >=</button>
    }

    return (
        <>
            {renderOperations(['+', '-', '*', '/'])}
            {renderEquals()}
            {renderClear()}
            {renderDecimal()}
        </>
    )
}

const opLiteral = {
    '+': 'add',
    '-': 'abstract',
    '*': 'multiply',
    '/': 'divide',
}
