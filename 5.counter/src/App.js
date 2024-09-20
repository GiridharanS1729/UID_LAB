import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowUp') increment();
      if (e.key === 'ArrowDown') decrement();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [count]);

  const counterColor = count > 0 ? 'green' : count < 0 ? 'red' : 'black';

  return (
    <div className="app-container">
      <h1>Counter App</h1>
      <h2 style={{ color: counterColor }}>{count}</h2>
      <div className="button-container">
        <button className="btn decrement" onClick={decrement}>-</button>
        <button className="btn increment" onClick={increment}>+</button>
      </div>
      <button className="btn reset" onClick={reset}>Reset</button>
    </div>
  );
};

export default App;
