'use strict';

const router = require('express').Router();

router.use('/professional', require('./professional'));
router.use('/cleaner', require('./testCleaning'));
router.use('/handyman', require('./testHandyman'));

router.use((req, res, next) => {
  const err = new Error('API endpoint not found');
  err.status = 404;
  next(err);
});

module.exports = router;
