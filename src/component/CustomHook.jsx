import React, { useReducer } from "react";
import useCounter from "./custom";
export default function CustomHook () {
    const {count,inc,dec,reset}=useCounter(5)
    return (
        <>
        <h1>{count}</h1>
        <button className="bg-amber-500 p-2 m-2" onClick={inc}>+</button>
        <button className="bg-slate-500 p-2 m-2" onClick={dec}>-</button>
        <button className="bg-blue-500 p-2 m-2" onClick={reset}>reset</button>
        </>
    )
}