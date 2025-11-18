//it consists reference of actual DOM
//it helps to preserve the previous state value


//it guves us direct access to DOM of elements
import React,{useState,useRef} from "react";

function UseRef(){
    const [count,setcount]=useState(1);
    const countRef=useRef(0);
    const handler=()=>{
        setcount(count+1);
        countRef.current=count;
    };

    const inputRef=useRef(null);
    const handler2=()=>{
        inputRef.current.value="hiten";
    };

    return <>
        <h2>This is the flow of useRef Hook which does not re-render the page and change in actual DOM</h2>
        <input ref={inputRef} ></input>
        <h1>{count}</h1>
        <h1>{countRef.current}</h1>
        <button onClick={handler} className="bg-blue-800 text-white hover:bg-blue-400 rounded-lg p-2">increase</button>
        <button onClick={handler2} className="bg-blue-800 text-white hover:bg-blue-400 rounded-lg p-2">change</button>
    </>
}
export default UseRef;