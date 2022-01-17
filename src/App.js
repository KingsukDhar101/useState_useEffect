import React, { useState, useEffect } from 'react';
import './style.css';
import Counter from './Counter.js';

export default function App() {
  const [flag, setFlag] = useState(true);

  return (
    <div className="App">
      <button
        onClick={() => {
          setFlag(!flag);
        }}
      >
        switch
      </button>
      <Counter />
    </div>
  );
}
