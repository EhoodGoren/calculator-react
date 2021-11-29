import React from "react";

export default function Numbers(props) {
    const renderNumbers = () => {
        let calcNumbers = [];
        for (let i = 0; i < 10; i++) {
            const numId = `num${i}`;
            calcNumbers.push(
                <button
                    id={numId}
                    className="numbers"
                    onClick={() => this.props.onClick(i)}
                >{i}</button>);
        }
        return calcNumbers;
    }

    return (
        <>{renderNumbers()}</>
    )
}
