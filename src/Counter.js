import React, { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  // v1
  useEffect(() => {
    console.log('render');
  });
  // v2
  useEffect(() => {
    console.log('render one time');
  },[]);
  // v3
  useEffect(() => {
    console.log('render only for dependency array');
  }, [count]);
  // v4
  useEffect(() => {
    return function(){
      console.log('unmount');
    })
  });

  return (
    <div className="counter-container">
      <div>{count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
}
