const express = require('express');

const app = express();

// logger
app.use((req, res, next) => {
  console.log(req.method, req.url);
});

// serve static assets