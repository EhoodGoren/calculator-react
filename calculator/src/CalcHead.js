import React from "react";

export default function CalcHead(props) {
    return (
        <>
            <div id="calc-line">{props.display}</div>
            <div id="display">{props.result}</div>
        </>
    )
}
