import { useState, useEffect } from "react";

function Timer(){
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds((i) => i +1)
        },1000)
        return () => clearInterval(timer)
    },[])

    return <h3> Seconds: {seconds}</h3>
}

export default Timer