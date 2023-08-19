// src/components/CreateComponent.js
import React, { useState } from 'react';
import axios from 'axios';

const CreateUserPage = () => {
  const [name, setName] = useState('');
  const [job, setJob] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://reqres.in/api/users', {
        name,
        job,
      });
      console.log('Created:', response.data);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateUserPage;
