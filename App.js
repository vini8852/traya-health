import React, { useState } from 'react';
import LoginForm from './components/Auth/LoginForm';
import SignupForm from './components/Auth/SignupForm';
import Dashboard from './components/Dashboard';
import Leaderboard from './components/Leaderboard';
import Profile from './components/Profile';
import StepCounter from './components/StepCounter';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    setLoggedIn(true);
  };

  const handleSignup = (email, password) => {
    setLoggedIn(true);
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <Dashboard />
          <Leaderboard />
          <Profile user={user} />
          <StepCounter />
        </div>
      ) : (
        <div>
          <LoginForm onLogin={handleLogin} />
          <SignupForm onSignup={handleSignup} />
        </div>
      )}
    </div>
  );
};

export default App;
