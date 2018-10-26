const Sequelize = require('sequelize');
const db = require('../database');

const TestHandyman = db.define('testHandyman', {
  experience: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  skills: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  training: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  supplies: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

module.exports = TestHandyman;
