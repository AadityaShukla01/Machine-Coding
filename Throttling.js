import React, { useState, useRef } from "react";

function ThrottleButton() {
  const [count, setCount] = useState(0);
  const lastRun = useRef(0); // remember last time function ran

  const handleClick = () => {
    const now = Date.now();
    if (now - lastRun.current >= 1000) { // allow once every 1 second
      setCount((prev) => prev + 1);
      lastRun.current = now;
    }
  };

  return (
    <div>
      <h2>Throttle Example</h2>
      <p>Button clicked (throttled): {count}</p>
      <button onClick={handleClick}>Click me as fast as you can!</button>
      <p>(Only increments once per second, no matter how fast you click)</p>
    </div>
  );
}

export default ThrottleButton;

// Throttle → "Allow execution every X ms, no matter how often events fire."
// Throttling ensures that a function is executed at most once in a specified time interval, no matter how many times the event is triggered.

// Use Case:
// Scroll position tracking (e.g., infinite scroll).
// Button clicks (prevent spamming).
// Window resize while dragging.
