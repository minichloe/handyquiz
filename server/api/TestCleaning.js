const router = require('express').Router();
const { TestCleaning } = require('../db/models');

module.exports = router;

router.post('/', async (req, res, next) => {
  try {
    const test = await TestCleaning.create(req.body);
    res.json(test);
  } catch (err) {
    next(err);
  }
});
