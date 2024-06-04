import React, { useState, useEffect } from 'react';
import { getUsers } from '../services/userService';
import UserList from '../components/UserList';
import UserDetail from '../components/UserDetail';
import NavigationBar from '../components/Navbar';
import './Dashboard.css';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [bannedUsers, setBannedUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data);
      setSelectedUser(data[0]); // Set the first user as the default selected user
    };

    fetchUsers();
  }, []);

  const handleBanUser = (user, duration) => {
    const banTime = new Date().toLocaleString();
    setBannedUsers([...bannedUsers, { ...user, banDuration: duration, banTime }]);
    setUsers(users.filter(u => u.id !== user.id));
    setSelectedUser(users.length > 1 ? users[1] : null);
  };

  const handleUnbanUser = (user) => {
    if (window.confirm(`Are you sure you want to unban ${user.username}?`)) {
      setUsers([...users, user]);
      setBannedUsers(bannedUsers.filter(bannedUser => bannedUser.id !== user.id));
    }
  };

  const handleDeleteUser = (userId) => {
    if (window.confirm(`Are you sure you want to delete this user?`)) {
      setUsers(users.filter(user => user.id !== userId));
      setSelectedUser(users.length > 1 ? users[1] : null);
    }
  };

  return (
    <>
      <NavigationBar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="card bg-dark text-white">
              <div className="card-body">
                <h3 className="card-title">Users List - {users.length}</h3>
                <UserList users={users} onSelectUser={setSelectedUser} selectedUser={selectedUser} />
              </div>
            </div>
            <div className="card bg-dark text-white mt-4">
              <div className="card-body">
                <h3 className="card-title">Banned Users - {bannedUsers.length}</h3>
                <ul className="list-group small-list">
                  {bannedUsers.map((user, index) => (
                    <li key={index} className="list-group-item list-group-item-dark d-flex justify-content-between align-items-center">
                      <span>{user.username} - Banned for {user.banDuration} (since {user.banTime})</span>
                      <button className="btn btn-success btn-sm" onClick={() => handleUnbanUser(user)}>Unban</button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="card bg-dark text-white mt-4">
              <div className="card-body">
                <h3 className="card-title">Total Users: {users.length + bannedUsers.length}</h3>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card bg-dark text-white">
              <div className="card-body">
                {selectedUser ? (
                  <UserDetail user={selectedUser} onBanUser={handleBanUser} onDeleteUser={handleDeleteUser} />
                ) : (
                  <p>Select a user to see details</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
