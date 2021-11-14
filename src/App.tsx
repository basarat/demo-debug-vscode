import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount(count => {
      return count + 1;
    });
  };
  return (
    <div className="App">
      <button onClick={onClick}>
        Click Me
      </button>
      <p>Count: {count}</p>
    </div>
  );
}

export default App;
