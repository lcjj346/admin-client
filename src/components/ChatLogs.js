import React from 'react';

const ChatLogs = ({ logs }) => {
  return (
    <div>
      {logs.length > 0 ? (
        <ul className="list-group">
          {logs.map(log => (
            <li key={log.id} className="list-group-item list-group-item-dark">
              <strong>{log.timestamp}:</strong> {log.message}
            </li>
          ))}
        </ul>
      ) : (
        <p>No chat logs available</p>
      )}
    </div>
  );
};

export default ChatLogs;
