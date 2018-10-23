'use strict';

const Sequelize = require('sequelize');

const db = new Sequelize(`postgres://localhost:5432/handyquiz`, { logging: false });

module.exports = db;
