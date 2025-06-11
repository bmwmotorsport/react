import { useState, useEffect } from 'react';

export default function UE() {
  const [count, setCount] = useState(0);
  const [cal, setCal] = useState(0);

  // Runs only once on first render
  useEffect(() => {
    alert("clicked once");
  }, []);

  // Runs on first render and whenever 'count' changes
  useEffect(() => {
    alert("clicked on button A");
  }, [count]);

  // Runs on every render (any state change)
  useEffect(() => {
    alert("every event triggered");
  });

  function changeCount() {
    setCount(count + 1);
  }

  function changeCal() {
    setCal(cal + 1);
  }

  return (
    <div>
      <button onClick={changeCount}>Button A {count}</button>
      <button onClick={changeCal}>Button B {cal}</button>
    </div>
  );
}
