import React from "react";

export default class Numbers extends React.Component {
    renderNumbers(){
        let numbers = [];
        for (let i = 0; i < 10; i++) {
            const numId = `num${i}`;
            numbers.push(
                <button
                    id={numId}
                    className="numbers"
                    onClick={() => this.props.onClick(i)}
                >{i}</button>);
        }
        return numbers;
    }

    render() {
        return (
            <>{this.renderNumbers()}</>
        )
    }
}
