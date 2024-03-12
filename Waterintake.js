import React, { useState } from 'react';

const WaterIntake = () => {
  const [waterIntake, setWaterIntake] = useState(0);
  const [goal, setGoal] = useState(8); // Goal in glasses per day

  const handleIncrement = () => {
    setWaterIntake((prevIntake) => prevIntake + 1);
  };

  const handleDecrement = () => {
    setWaterIntake((prevIntake) => Math.max(0, prevIntake - 1));
  };

  const handleReset = () => {
    setWaterIntake(0);
  };

  const progress = (waterIntake / goal) * 100;

  return (
    <div>
      <h2>Water Intake Tracker</h2>
      <div>
        <p>
          Water Intake: {waterIntake} / {goal} glasses
        </p>
        <div style={{ width: '200px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '10px' }}>
          <div
            style={{
              width: `${progress}%`,
              backgroundColor: '#4CAF50',
              height: '20px',
              borderRadius: '5px',
            }}
          ></div>
        </div>
        <button onClick={handleIncrement}>Drink Water</button>
        <button onClick={handleDecrement}>Undo</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default WaterIntake;
