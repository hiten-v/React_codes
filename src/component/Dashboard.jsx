import React from 'react';
const Dashboard = (props)=>{
    const name=props.information.name;
    const age=props.information.age;
    const skills=props.information.skills;
    console.log(skills)
    return (
        <>
            <div className="p-2 m-2 flex flex-col text-center bg-amber-400 rounded-xl">
                <h1 className="text-2xl ">This is User DashBoard</h1>
                <div className="flex flex-col gap-4">
                    <div>User name : {name}</div>
                    <div>User age : {age}</div>
                    {/* <div>Skills : {skills.map}</div> */}
                    <ul>
                        {
                            skills.map((item,indx)=>{
                                return (<li key={indx}>{item}</li>)
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    );
}
export default Dashboard
