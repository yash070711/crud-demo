/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserTable.css'; // Import your CSS file for styling

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', job: '' });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://reqres.in/api/users');
      setUsers(response.data.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleCreate = async () => {
    try {
      const response = await axios.post('https://reqres.in/api/users', newUser);
      console.log('Created:', response.data);
      fetchUsers(); // Refresh the user list
      setNewUser({ name: '', job: '' });
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const handleUpdate = async (id, updatedUser) => {
    try {
      await axios.patch(`https://reqres.in/api/users/${id}`, updatedUser);
      console.log('Updated:', id);
      fetchUsers(); // Refresh the user list
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://reqres.in/api/users/${id}`);
      console.log('Deleted:', id);
      fetchUsers(); // Refresh the user list
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="user-table">
      <h2>User Table</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Job</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                <input
                  type="text"
                  value={user.name}
                  onChange={(e) => handleUpdate(user.id, { ...user, name: e.target.value })}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={user.job}
                  onChange={(e) => handleUpdate(user.id, { ...user, job: e.target.value })}
                />
              </td>
              <td>
                <button onClick={() => handleUpdate(user.id, user)}>Update</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                value={newUser.name}
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              />
            </td>
            <td>
              <input
                type="text"
                value={newUser.job}
                onChange={(e) => setNewUser({ ...newUser, job: e.target.value })}
              />
            </td>
            <td>
              <button onClick={handleCreate}>Add</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
*/