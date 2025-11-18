import { useState,useEffect } from 'react'
import './App.css'
import Home from "./component/Home"
import Togglebtn from './component/togglebtn'
import Dashboard from './component/Dashboard'
import Input from './component/Input'
import UseRef from "./component/UseRef";
function App() {
  const [count, setCount] = useState(0) //here it is destructing of useState which accepts a variable and setter func 

    //useEffect takes 2 args {} func & [] dependency array
    //mounting -> when DOM is created first time and appear on screen when creaation or component insetion
    //updating ->Component re-renders when state/props change
    //un-mounting -> delete the component

  useEffect(()=>{
    console.log("Component Mounted");
  },[]); 

  const info={
    name: "hiten",
    age:21,
    skills: ["java","js","react","node"]
  };
  return (
    <>
      <div>
        <div className="bg-linear-to-r from-indigo-400 to-green-400 p-2 rounded-xl">
          This is my new heading
        </div>

        <div className="flex flex-col p-2 m-2 justify-center">
          <div className="flex justify-center gap-2"> 
            <h2 className="text-2xl font-bold p-2 m-2 bg-amber-500 rounded-lg">Current Count: {count}</h2>
            <button onClick={() => setCount(count + 1)} 
                className="bg-blue-500 text-white p-2 m-2 rounded-lg hover:bg-blue-300">
              Increase Count
            </button>
            <button onClick={() => setCount(count - 1)} 
                className="bg-blue-500 text-white p-2 m-2 rounded-lg hover:bg-blue-300">
              Decrease Count
            </button>
            <button onClick={() => setCount(0)} 
                className="bg-blue-500 text-white p-2 m-2 rounded-lg hover:bg-blue-300">
              Reset Count
            </button>
          </div>
        </div>
        
        <Home information={info}></Home>
        
        <Dashboard information={info}></Dashboard> 

        <Togglebtn> </Togglebtn> 
        <Input/>
        <UseRef/>
      </div>
    </>
  )
}

export default App
