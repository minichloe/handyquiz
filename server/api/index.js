'use strict';

const router = require('express').Router();

router.use('/professional', require('./professional'));
router.use('./testCleaning', require('./testCleaning'));
router.use('./testHandyman', require('./testHandyman'));

router.use((req, res, next) => {
  const err = new Error('API endpoint not found');
  err.status = 404;
  next(err);
});

module.exports = router;
