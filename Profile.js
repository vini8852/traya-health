import React, { useState } from 'react';

const Profile = ({ user }) => {
  const [newName, setNewName] = useState('');

  const handleNameChange = () => {
  };

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {user.name}</p>
      <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
      <button onClick={handleNameChange}>Update Name</button>
    </div>
  );
};

export default Profile;
