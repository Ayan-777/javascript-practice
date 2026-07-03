import { useState } from "react";

function Experiment(){
    const [user, setUser] = useState({name: "Ayan", role: "Beginner"})

    function fixReact(){
        setUser({...user, role: "Internship Ready"})
    }


    return (
        <div>
            <h1>Name: {user.name}</h1>
            <h2>Role: {user.role}</h2>
            <button onClick={fixReact}  > Upgrade Role</button>
        </div>
    )

}

export default Experiment