import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrementalCount = () => {
    setCount((count) => count + 1);
  };

  const handleDecreaseCount = () => {
    setCount((count) => count - 1);
  };

  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">
        The counter is currently: <span data-test="count">{count}</span>{" "}
      </h1>
      <button data-test="increment-button" onClick={handleIncrementalCount}>
        {" "}
        Increment Counter
      </button>
      <button data-test="decrement-button" onClick={handleDecreaseCount}>
        {" "}
        Decrease Counter
      </button>
      <h1>
        <h2 data-test="countme-title">COUNTME</h2>
      </h1>
    </div>
  );
}

export default App;
