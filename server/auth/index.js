'use strict';

const router = require('express').Router();

router.put('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = User.findOne({
      where: {
        email,
        password,
      },
    });
    if (user) {
      req.session.userId = user.id;
      res.json(user);
    } else {
      res.status(401).send();
    }
  } catch (err) {
    next(err);
  }
});

router.get('/admin', async (req, res, next) => {
  try {
    if (req.session.userId) {
      const user = await User.findOne({ where: { id: req.session.userId } });
      res.json(user);
    } else {
      res.status(404).send();
    }
  } catch (err) {
    next(err);
  }
});

router.delete('/logout', (req, res, next) => {
  req.session.destroy();
  res.status(204).end();
});

router.use((req, res, next) => {
  const err = new Error('API endpoint not found');
  err.status = 404;
  next(err);
});

module.exports = router;
