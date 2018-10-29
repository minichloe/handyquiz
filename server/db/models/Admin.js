const Sequelize = require('sequelize');
const db = require('../database');

const Admin = db.define('admin', {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Admin;
