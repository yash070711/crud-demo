import { useState } from 'react';
import './DataTable.css'; // Import the CSS file
import EditModal from './EditModal';
function DataTable({ data ,onDelete,}) {
    const [selectedUser, setSelectedUser] = useState(null);

  const openEditModal = (user) => {
    setSelectedUser(user);
  };

  const closeEditModal = () => {
    setSelectedUser(null);
  };
    
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Avatar</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.email}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>
                <img src={item.avatar} alt="Avatar" />
              </td>
              <td>
                <button onClick={() => onDelete(item.id)}>Delete</button>
                <button onClick={() => openEditModal(item)}>Edit</button>
              </td> 
            </tr>
          ))}
          
        </tbody>
      </table>
      {selectedUser && (
        <EditModal user={selectedUser} onClose={closeEditModal} />
      )}
    </div>
  );
}

export default DataTable;
