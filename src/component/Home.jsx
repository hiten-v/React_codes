// import { Herosection } from "./Herosection";
import { useContext } from "react";
import {AuthContext} from './AuthContext';
const Home = ()=>{
    // const name=props.information.name;
    // const skill=props.information.skill;
    // return (
    //     <>
    //         <div>
    //             This is Home
    //             <Herosection na={name} sk={skill}></Herosection>
    //         </div>
    //     </>
    // )

    const { user, login, logout } = useContext(AuthContext);

    return (
        <div className="text-center w-fit p-2 m-2 rounded-lg border-2 border-amber-600 bg-amber-200 text-gray-700">
        <h1>Context API Auth Demo</h1>

        {user ? (
            <>
            <h2>Welcome, {user.name}!</h2>
            <button className="bg-blue-600 p-2 text-white rounded-lg hover:bg-blue-300" onClick={logout}>Logout</button>
            </>
        ) : (
            <>
            <h2>You are not logged in</h2>
            <button className="bg-blue-600 p-2 text-white rounded-lg hover:bg-blue-300" onClick={login}>Login</button>
            </>
        )}
        </div>
    );
}
export default Home


// props disadvantages 

// props sending is unidirectional only from parent to children
// props are immutable in child
// props drilling -> when info is passed from parent to children deep down like 15th level

//hence context api or redux was indroduced

//instead of holding info all time we store it in component and only used when accessed
