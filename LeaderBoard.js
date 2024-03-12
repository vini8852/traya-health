import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
   //backend api will be used here to fetch data
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name}: {user.stepCount}</li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
