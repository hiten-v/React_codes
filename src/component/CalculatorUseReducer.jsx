import React, { useReducer } from "react";

const initialState = {
    current: "",
    previous: "",
    operation: ""
};

function reducer(state, action) {
    switch (action.type) {
        case "ADD_NUMBER":
            return { 
                ...state, 
                current: state.current + action.payload 
            };

        case "CHOOSE_OPERATION":
            if (state.current === "") return state;
            if (state.previous !== "") {
                const value = eval(state.previous + state.operation + state.current);
                return {
                    previous: value.toString(),
                    current: "",
                    operation: action.payload
                };
            }
            return {
                previous: state.current,
                current: "",
                operation: action.payload
            };

        case "CLEAR":
            return initialState;

        case "EQUALS":
            if (state.previous === "" || state.current === "") return state;
            return {
                current: eval(state.previous + state.operation + state.current).toString(),
                previous: "",
                operation: ""
            };

        default:
            return state;
    }
}

export default function CalculatorUseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="p-5 w-64 mx-auto mt-10 bg-gray-900 text-white rounded-xl shadow-xl">
            {/* Display */}
            <div className="bg-black p-4 text-right rounded-lg mb-3 h-16">
                <div className="text-gray-400 text-sm">
                    {state.previous} {state.operation}
                </div>
                <div className="text-2xl font-bold">
                    {state.current || "0"}
                </div>
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-4 gap-3">
                <button className="bg-red-500 p-3 rounded-lg"
                        onClick={() => dispatch({ type: "CLEAR" })}>
                    C
                </button>

                <button className="bg-gray-700 p-3 rounded-lg col-span-3"
                        onClick={() => dispatch({ type: "EQUALS" })}>
                    =
                </button>

                {[7, 8, 9].map(n => (
                    <button key={n}
                        className="bg-gray-700 p-3 rounded-lg"
                        onClick={() => dispatch({ type: "ADD_NUMBER", payload: n.toString() })}>
                        {n}
                    </button>
                ))}

                <button className="bg-yellow-500 p-3 rounded-lg"
                        onClick={() => dispatch({ type: "CHOOSE_OPERATION", payload: "/" })}>
                    ÷
                </button>

                {[4, 5, 6].map(n => (
                    <button key={n}
                        className="bg-gray-700 p-3 rounded-lg"
                        onClick={() => dispatch({ type: "ADD_NUMBER", payload: n.toString() })}>
                        {n}
                    </button>
                ))}

                <button className="bg-yellow-500 p-3 rounded-lg"
                        onClick={() => dispatch({ type: "CHOOSE_OPERATION", payload: "*" })}>
                    ×
                </button>

                {[1, 2, 3].map(n => (
                    <button key={n}
                        className="bg-gray-700 p-3 rounded-lg"
                        onClick={() => dispatch({ type: "ADD_NUMBER", payload: n.toString() })}>
                        {n}
                    </button>
                ))}

                <button className="bg-yellow-500 p-3 rounded-lg"
                        onClick={() => dispatch({ type: "CHOOSE_OPERATION", payload: "-" })}>
                    −
                </button>

                <button className="bg-gray-700 p-3 rounded-lg col-span-2"
                        onClick={() => dispatch({ type: "ADD_NUMBER", payload: "0" })}>
                    0
                </button>

                <button className="bg-gray-700 p-3 rounded-lg"
                        onClick={() => dispatch({ type: "ADD_NUMBER", payload: "." })}>
                    .
                </button>

                <button className="bg-yellow-500 p-3 rounded-lg"
                        onClick={() => dispatch({ type: "CHOOSE_OPERATION", payload: "+" })}>
                    +
                </button>
            </div>
        </div>
    );
}
