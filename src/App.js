import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increaseCounter = () => {
    setCount(count + 1);
  };

  const resetCounter = () => {
    setCount(0);
  };

  const decreaseCounter = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <h1>Contador</h1>
      <div className="counter">{count}</div>
      <div>
        <button className="button" onClick={increaseCounter}>
          Aumentar
        </button>
        <button className="button" onClick={resetCounter}>
          Resetear
        </button>
        <button className="button" onClick={decreaseCounter}>
          Disminuir
        </button>
      </div>
    </div>
  );
}

export default App;
