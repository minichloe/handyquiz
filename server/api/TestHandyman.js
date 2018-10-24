const router = require('express').Router();
const { TestHandyman } = require('../db/models');

module.exports = router;

router.post('/', async (req, res, next) => {
  try {
    const test = await TestHandyman.create(req.body);
    res.json(test);
  } catch (err) {
    next(err);
  }
});
