'use strict';

const Sequelize = require('sequelize');

const dbName = 'replace with your database name';

const db = new Sequelize(`postgres://localhost:5432/${dbName}`, { logging: false });

module.exports = db;
