import React, { useState, useEffect } from 'react';
import { getUserById, banUser, deleteUser } from '../services/userService';
import ChatLogs from './ChatLogs';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const UserDetail = ({ user, onBanUser, onDeleteUser }) => {
  const [chatLogs, setChatLogs] = useState([]);
  const [banDuration, setBanDuration] = useState('');

  useEffect(() => {
    const fetchChatLogs = async () => {
      const data = await getUserById(user.id);
      setChatLogs(data.chatLogs);
    };

    fetchChatLogs();
  }, [user.id]);

  const handleBanUser = () => {
    if (banDuration) {
      if (window.confirm(`Are you sure you want to ban ${user.username} for ${banDuration}?`)) {
        banUser(user.id, banDuration);
        onBanUser(user, banDuration);
        alert(`User banned for ${banDuration}`);
      }
    } else {
      alert('Please select a ban duration');
    }
  };

  const handleDeleteUser = async () => {
    if (window.confirm(`Are you sure you want to delete ${user.username}?`)) {
      await deleteUser(user.id);
      onDeleteUser(user.id);
      alert('User deleted successfully');
    }
  };

  return (
    <div className="card bg-dark text-white">
      <div className="card-body">
        <h3 className="card-title">User Details</h3>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <div className="d-flex align-items-center">
          <DropdownButton
            id="dropdown-basic-button"
            title={banDuration || "Select Ban Duration"}
            variant="warning"
            onSelect={(e) => setBanDuration(e)}
            className="mr-2"
          >
            <Dropdown.Item eventKey="1 day">1 day</Dropdown.Item>
            <Dropdown.Item eventKey="7 days">7 days</Dropdown.Item>
            <Dropdown.Item eventKey="30 days">30 days</Dropdown.Item>
          </DropdownButton>
          <button className="btn btn-warning" onClick={handleBanUser}>Ban User</button>
        </div>
        <button className="btn btn-danger mt-2" onClick={handleDeleteUser}>Delete User</button>
        <hr />
        <h4>Chat Logs</h4>
        <ChatLogs logs={chatLogs} />
      </div>
    </div>
  );
};

export default UserDetail;
