import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h1 className="title">React Counter</h1>

      <div className="counter-box">
        <h2 className="count">{count}</h2>

        <div className="buttons">
          <button className="btn increment" onClick={increment}>
            Increment
          </button>

          <button className="btn decrement" onClick={decrement}>
            Decrement
          </button>

          <button className="btn reset" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;