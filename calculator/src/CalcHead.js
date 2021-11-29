import React from "react";

export default function CalcHead(props) {
    return (
        <>
            <div id="input">{props.display}</div>
            <div id="result">{props.result}</div>
        </>
    )
}
