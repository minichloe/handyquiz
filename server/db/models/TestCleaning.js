const Sequelize = require('sequelize');
const db = require('../database');

const TestCleaning = db.define('testCleaning', {
  experience: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  cobwebs: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  kitchen: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  cleaningOrder: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  punctuality: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  hardwood: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = TestCleaning;
