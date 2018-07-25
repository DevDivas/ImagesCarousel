const express = require('express');
const path = require('path');
const db = require('../database/index.js');

// Create server
const app = express();

// Logger
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// Serve static assets
app.use(express.static(path.join(__dirname, '../public')));

// handle visit to specific room page
app.get('/rooms/:roomId', (req, res) => {
  const roomId = Number(req.params.roomId);

  db.fetchRoomPics(roomId, (err, data) => {
    if (err) {
      res.status(500).send();
      return;
    }
    res.status(200).send(data);
  });
});

module.exports = app;
