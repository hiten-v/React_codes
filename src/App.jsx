import { useState } from 'react'
import './App.css'
import Home from "./component/Home"
import Togglebtn from './component/togglebtn'
import Dashboard from './component/Dashboard'
function App() {
  const [count, setCount] = useState(0) //here it is destructing of useState which accepts a variable and setter func 

  const info={
    name: "hiten",
    age:21,
    skills: ["java","js","react","node"]
  };
  return (
    <>
      <div>
        <div class="bg-linear-to-r from-indigo-400 to-green-400 p-2 rounded-xl">
          This is my new heading
        </div>

        <div class="flex flex-col p-2 m-2 justify-center">
          <div class="flex justify-center gap-2"> 
            <h2 class="text-2xl font-bold p-2 m-2 bg-amber-500 rounded-lg">Current Count: {count}</h2>
            <button onClick={() => setCount(count + 1)} 
                class="bg-blue-500 text-white p-2 m-2 rounded-lg hover:bg-blue-300">
              Increase Count
            </button>
            <button onClick={() => setCount(count - 1)} 
                class="bg-blue-500 text-white p-2 m-2 rounded-lg hover:bg-blue-300">
              Decrease Count
            </button>
            <button onClick={() => setCount(0)} 
                class="bg-blue-500 text-white p-2 m-2 rounded-lg hover:bg-blue-300">
              Reset Count
            </button>
          </div>
        </div>
        
        <Home information={info}></Home>

        <Dashboard information={info}></Dashboard> 

        <Togglebtn> </Togglebtn> 
      </div>
    </>
  )
}

export default App
