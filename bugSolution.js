const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Error handling for invalid user ID
  if (isNaN(parseInt(userId))) {
    return res.status(400).json({ message: 'Invalid user ID' });
  }
  const user = users.find(user => user.id === parseInt(userId));
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
});

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
];