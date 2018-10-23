const Sequelize = require('sequelize');
const db = require('../database');

const TestCleaning = db.define('testCleaning', {
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

module.exports = TestCleaning;
