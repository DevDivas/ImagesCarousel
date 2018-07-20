const express = require('express');
const path = require('path');

const app = express();

// Logger
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// Serve static assets
app.use(express.static(path.join(__dirname, '../public')));

// Set port to listen to
const port = 3001;
app.listen(port, () => console.log(`Listening to port ${port}...`));
