const express = require('express');
const sourceRouter = express.Router();

sourceRouter.get('', (req, res) => {
  res.send(`
    <h1>API Endpoints:</h1>
    <ul>
      <li>GET /users/:userId</li>
      <li>GET /users</li>
      <li>POST /users</li>
      <li>DELETE /users/:userId</li>
      <li>PUT /users</li>
      <li>GET /users/access</li>
    </ul>
  `);
});

module.exports = sourceRouter;