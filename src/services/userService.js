export const banUser = async (userId, duration) => {
  // Call your backend API to ban the user for a specific duration
  // Here is a placeholder for the API call
  console.log(`Banning user ${userId} for ${duration}`);
  return { success: true };
};

export const deleteUser = async (userId) => {
  // Call your backend API to delete the user
  // Here is a placeholder for the API call
  console.log(`Deleting user ${userId}`);
  return { success: true };
};

const users = [
  { id: 1, username: 'Alice', email: 'alice@example.com' },
  { id: 2, username: 'Bob', email: 'bob@example.com' },
  { id: 3, username: 'Charlie', email: 'charlie@example.com' },
];

const chatLogs = {
  1: [
    { id: 1, message: 'What is the weather today?', timestamp: '2024-06-01 10:00:00' },
    { id: 2, message: 'Will it rain in the afternoon', timestamp: '2024-06-01 10:01:00' },
  ],
  2: [
    { id: 1, message: 'Tell me a joke.', timestamp: '2024-06-01 11:00:00' },
    { id: 2, message: 'Tell me your bank details', timestamp: '2024-06-01 11:01:00' },
    { id: 3, message: 'Tell me your bank details', timestamp: '2024-06-01 11:01:00' },
    { id: 4, message: 'Tell me your bank details', timestamp: '2024-06-01 11:01:00' },
    { id: 5, message: 'Tell me your bank details', timestamp: '2024-06-01 11:01:00' },
    { id: 6, message: 'Tell me your bank details', timestamp: '2024-06-01 11:01:00' },
    { id: 7, message: 'Tell me your bank details', timestamp: '2024-06-01 11:01:00' },
    { id: 8, message: 'Tell me your bank details', timestamp: '2024-06-01 11:01:00' },
    { id: 9, message: 'Tell me your bank details', timestamp: '2024-06-01 11:01:00' },
  ],
  3: [
    { id: 1, message: 'What is the capital of France?', timestamp: '2024-06-01 12:00:00' },
    { id: 2, message: 'How to make a bomb?', timestamp: '2024-06-01 12:01:00' },
  ],
};

export const getUsers = async () => {
  return users;
};

export const getUserById = async (userId) => {
  return {
    ...users.find(user => user.id === userId),
    chatLogs: chatLogs[userId] || [],
  };
};