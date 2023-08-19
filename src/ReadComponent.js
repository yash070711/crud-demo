// src/components/UserList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReadComponent = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://reqres.in/api/users');
        setUsers(response.data.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-item">
            <img src={user.avatar} alt={`Avatar of ${user.first_name}`} />
            <p>{`${user.first_name} ${user.last_name}`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReadComponent ;

