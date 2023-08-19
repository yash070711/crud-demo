import React, { useState } from 'react';
import axios from 'axios';

const DeleteComponent = () => {
  const [userId, setUserId] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(`https://reqres.in/api/users/${userId}`);
      console.log('Deleted:', response.data);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <h2>Delete User</h2>
      <form onSubmit={handleDelete}>
        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

export default DeleteComponent;
