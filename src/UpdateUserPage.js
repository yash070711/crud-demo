// src/components/UpdateComponent.js
import React, { useState } from 'react';
import axios from 'axios';

const UpdateUserPage = () => {
  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [job, setJob] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`https://reqres.in/api/users/${userId}`, {
        name,
        job,
      });
      console.log('Updated:', response.data);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div>
      <h2>Update User</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Job"
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateUserPage;
