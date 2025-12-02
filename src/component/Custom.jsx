import React from 'react'
export default function useCounter(intial=0){
    const [count,setCount]=useState(initial);
    const inc=()=>{
        setCount(count+1);
    };
    const dec=()=>{
        setCount(count-1);
    };
    const reset=()=>{
        setCount(0);
    };
    return {count,inc,dec,reset};
}
