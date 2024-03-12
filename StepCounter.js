import React, { useState } from 'react';

const StepCounter = () => {
  const [stepCount, setStepCount] = useState(0);

  const handleIncrement = () => {
    setStepCount(stepCount + 1);
  };

  const handleDecrement = () => {
    setStepCount(stepCount - 1 >= 0 ? stepCount - 1 : 0);
  };

  return (
    <div>
      <h2>Step Counter</h2>
      <button onClick={handleIncrement}>+</button>
      <span>{stepCount}</span>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};

export default StepCounter;
