import React, { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "ADD":
            return state + 1;
        case "SUB":
            return state - 1;
        default:
            return state;
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, 0);

    return (
        <>
            <h1>{state}</h1>

            <button
                className="bg-amber-400 rounded-2xl p-1.5 m-1.5"
                onClick={() => dispatch({ type: "ADD" })}
            >
                +
            </button>

            <button
                className="bg-blue-400 rounded-2xl p-1.5 m-1.5"
                onClick={() => dispatch({ type: "SUB" })}
            >
                -
            </button>
        </>
    );
}

export default Counter;
