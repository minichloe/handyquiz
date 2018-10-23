const Sequelize = require('sequelize');
const db = require('../database');

const TestHandyman = db.define('testHandyman', {
  experience: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  skills: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false,
  },
  training: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false,
  },
  supplies: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
});

module.exports = TestHandyman;
