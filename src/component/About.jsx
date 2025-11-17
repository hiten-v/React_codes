import { Component } from "react";

class About extends Component{
    render(){
        return(
            <>
                <h1 className="text-purple-800"> hi this is about section</h1>
                <h2 classNmae="text-pink-400">welcome to about page</h2>
            </>
        );
    }
}
export default About;


//event loop is when more than 1 event are stored in call stack since they give result and in the mean time other events are executed

//web api is a special feature of browser used in data fetching setTimeOut setInterval

//hooks are inbuilt special function that provide state management 

//before react 16 class component were used and the con there was we had to manage state manuaally
//now functional components are used that have inbuikt stat emanagemnt called hooks

//custom hooks can be created with the help of multiple inbuilt hooks