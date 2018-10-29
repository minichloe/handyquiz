'use strict';

const router = require('express').Router();
const { Admin } = require('../db/models');

router.put('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({
      where: {
        email,
        password,
      },
    });
    if (admin) {
      req.session.adminId = admin.id;
      res.json(admin);
    } else {
      res.status(401).send();
    }
  } catch (err) {
    next(err);
  }
});

router.get('/admin', async (req, res, next) => {
  try {
    if (req.session.adminId) {
      const admin = await Admin.findOne({ where: { id: req.session.adminId } });
      res.json(admin);
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
