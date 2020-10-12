// Dependencies
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const fs = require('fs');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

  // HTML Routes
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });

  app.get('/api', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
  });

  app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });