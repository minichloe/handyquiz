const Sequelize = require('sequelize');
const db = require('../database');

const Professional = db.define('professional', {
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

module.exports = Professional;
