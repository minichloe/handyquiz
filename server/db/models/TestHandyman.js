const Sequelize = require('sequelize');
const db = require('../database');

const TestHandyman = db.define('testHandyman', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  service: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = TestHandyman;
