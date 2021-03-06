const router = require('express').Router();
const { Professional, TestCleaning, TestHandyman } = require('../db/models');

module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const allProfessionals = await Professional.findAll({ include: [TestCleaning, TestHandyman] });
    res.json(allProfessionals);
  } catch (err) {
    next(new Error('Access denied'));
  }
});

router.post('/', async (req, res, next) => {
  try {
    const cleaner = req.body.service === 'cleaner';
    const professional = await Professional.create(req.body, { include: [{ model: cleaner ? TestCleaning : TestHandyman }] });
    res.json(professional);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const cleaner = req.body.service === 'cleaner';
    const [_, professional] = await Professional.update(req.body, {
      returning: true,
      include: [{ model: cleaner ? TestCleaning : TestHandyman }],
    });
    res.json(professional);
  } catch (err) {
    next(err);
  }
});
