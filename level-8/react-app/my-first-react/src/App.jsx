import { useState } from "react";
import  Greeting  from "./Greeting.jsx";
import Counter from "./Counter.jsx";
import Toggle from "./toggle.jsx";
import Timer from "./Time.jsx";

function App(){
  const [showtimer, setshowtimer] = useState(true) 
  return(
    <div>
    <h1>Hello React</h1>
    <Greeting name="Ayan" />
    <Greeting name ="Ben 10"/>
    <Greeting name="lion" />
    <Counter />
    <Toggle />
    {showtimer && <Timer/>}
    <button onClick={() => setshowtimer(!showtimer)}>show timer</button>
    </div>
  )
}

export default App