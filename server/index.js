'use strict';

const express = require('express');
const path = require('path');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');

const app = express();
const db = require('./db');
const PORT = 1337;

// logging middleware
app.use(volleyball);

// body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// all routes
app.use('/api', require('./api'));

// static middleware
app.use(express.static(path.join(__dirname, '..', 'public')));

// Send index.html for any other requests
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

// error handling middleware
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
  } else {
    next();
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

db.sync().then(() => {
  console.log('Database synced');
  app.listen(PORT, () => console.log(`Serving requests on port ${PORT}`));
});
