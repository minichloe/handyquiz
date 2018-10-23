'use strict';

const Sequelize = require('sequelize');

const dbName = 'handyquiz';

const db = new Sequelize(`postgres://localhost:5432/${dbName}`, { logging: false });

module.exports = db;
