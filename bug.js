const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for cases where userId is not a number or is not found
  const user = users.find(user => user.id === parseInt(userId));
  if (!user) {
    // Instead of simply returning 404, provide more details
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
});

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
];