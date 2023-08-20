import React from 'react';
import './EditModal.css';

function EditModal({ user, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit User</h2>
        <form>
          <div>
            <label>ID:</label>
            <span>{user.id}</span>
          </div>
          <div>
            <label>Email:</label>
            <input type="email" defaultValue={user.email} />
          </div>
          <div>
            <label>First Name:</label>
            <input type="text" defaultValue={user.first_name} />
          </div>
          <div>
            <label>Last Name:</label>
            <input type="text" defaultValue={user.last_name} />
          </div>
          {/* Add more input fields for other user data */}
          <div className="button-container">
            <button type="submit">Save</button>
            <button type="button" onClick={onClose}>Close</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditModal;
