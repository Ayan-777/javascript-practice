import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p> Count even number : {count}</p>
      <button onClick={() => setCount(count + 2)} disabled = {count >= 10}>+</button>
      <button onClick={() => setCount(count - 2)} disabled = {count === 0}>-</button>
    </div>
  );
}

export default Counter;
