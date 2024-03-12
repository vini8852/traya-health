import React, { useState, useEffect } from 'react';

const EngagementFeature = () => {
  const [steps, setSteps] = useState(0);
  const [goal, setGoal] = useState(5000); // Default daily step goal
  const [achievements, setAchievements] = useState([]);

  // Function to handle adding a step
  const incrementSteps = () => {
    setSteps(prevSteps => prevSteps + 1);
  };

  // Function to set a new daily step goal
  const setNewGoal = (newGoal) => {
    setGoal(newGoal);
  };

  useEffect(() => {
    // Track progress and grant achievements based on certain milestones
    if (steps >= 10000) {
      setAchievements(prevAchievements => [...prevAchievements, "Step Master"]);
    } else if (steps >= 5000) {
      setAchievements(prevAchievements => [...prevAchievements, "Step Achiever"]);
    } else if (steps >= 2000) {
      setAchievements(prevAchievements => [...prevAchievements, "Step Beginner"]);
    }
  }, [steps]);

  return (
    <div>
      <h2>Step Counter</h2>
      <p>Today's Steps: {steps}</p>
      <p>Daily Goal: {goal}</p>
      <button onClick={incrementSteps}>Add Step</button>

      {/* Set Daily Goal Component */}
      <SetGoalForm setNewGoal={setNewGoal} />

      {/* Achievement Display */}
      <h3>Achievements</h3>
      <ul>
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </div>
  );
};

// Component for setting a new daily step goal
const SetGoalForm = ({ setNewGoal }) => {
  const [newGoal, setNewGoalValue] = useState('');

  const handleChange = (e) => {
    setNewGoalValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newGoal.trim() !== '') {
      setNewGoal(parseInt(newGoal));
      setNewGoalValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Set Daily Goal:
        <input type="number" value={newGoal} onChange={handleChange} />
      </label>
      <button type="submit">Set Goal</button>
    </form>
  );
};

export default EngagementFeature;
