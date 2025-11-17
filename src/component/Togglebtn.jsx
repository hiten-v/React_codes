import {React,useState} from 'react';
const Togglebtn = ()=>{
    const [value, setValue] = useState(false)
      return (
        <>
            <div class="flex flex-col p-2 m-2 justify-center">
                <div class="flex justify-center gap-2"> 
                    <h1 className={`p-2 m-2 rounded ${ 
                        value ? "bg-amber-400" : "bg-slate-600"}`}>
                    { value ? "ON" : "OFF" } </h1>
                    <button onClick={() => {
                        if(value==true)
                        {
                            setValue(false)
                        }
                        else
                        {
                            setValue(true)
                        }
                    }} 
                        class="bg-blue-500 text-white p-2 m-2 rounded-lg hover:bg-blue-300">
                    Change
                    </button>

                </div>
            </div>
        </>
    );
};
export default Togglebtn