import React from 'react';
import { Herosection } from "./Herosection";
const Home = (props)=>{
    const name=props.information.name;
    const skill=props.information.skill;
    return (
        <>
            <div>
                This is Home
                <Herosection na={name} sk={skill}></Herosection>
            </div>
        </>
    )
}
export default Home


// props disadvantages 

// props sending is unidirectional only from parent to children
// props are immutable in child
// props drilling -> when info is passed from parent to children deep down like 15th level

//hence context api or redux was indroduced

//instead of holding info all time we store it in component and only used when accessed
