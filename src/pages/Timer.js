import React, { useEffect, useState } from "react";

// Create a simple 10 second countdown

const Timer = () => {
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div>
      <div>Countdown: {counter}</div>
    </div>
  );
};

export default Timer;
