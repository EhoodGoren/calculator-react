import React from "react";

export default function Numbers(props) {
    const renderNumbers = () => {
        let calcNumbers = [];
        for (let i = 0; i < 10; i++) {
            const numId = numbersLiteral[i];
            calcNumbers.push(
                <button
                    id={numId}
                    className="numbers"
                    onClick={() => props.onClick(`${i}`)}
                >{i}</button>);
        }
        return calcNumbers;
    }

    return (
        <>{renderNumbers()}</>
    )
}

const numbersLiteral = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
}
