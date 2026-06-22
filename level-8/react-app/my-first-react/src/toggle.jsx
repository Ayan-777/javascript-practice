import { useState } from "react";

function Toggle(){
    const [isOn,setOn] = useState(true)
    return (
        <div>
            <p>{isOn? "Light" : "DARK"}</p>
            <button onClick={() => setOn(!isOn)}>Toggle</button>
        </div>
    );
}

export default Toggle