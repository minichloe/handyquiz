const router = require('express').Router();
const { TestHandyman } = require('../db/models');

module.exports = router;

router.post('/', async (req, res, next) => {
  try {
    const test = await TestHandyman.findOrCreate({
      where: { ...req.body },
      defaults: req.body,
    });
    res.json(test[0]);
  } catch (err) {
    next(err);
  }
});
