import React from 'react';

const UserList = ({ users, onSelectUser, selectedUser }) => {
  return (
    <ul className="list-group">
      {users.map(user => (
        <li 
          key={user.id} 
          className={`list-group-item list-group-item-dark ${selectedUser && selectedUser.id === user.id ? 'active' : ''}`} 
          onClick={() => onSelectUser(user)}
        >
          {user.username}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
