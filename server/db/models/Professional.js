const Sequelize = require('sequelize');
const db = require('../database');

const Professional = db.define('professional', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  zipcode: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isNumeric: true,
      len: [5, 5],
    },
  },
  service: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Professional;
