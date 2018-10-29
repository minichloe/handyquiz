const Professional = require('./Professional');
const TestCleaning = require('./TestCleaning');
const TestHandyman = require('./TestHandyman');
const Admin = require('./Admin');

Professional.belongsTo(TestCleaning);
TestCleaning.hasMany(Professional);

Professional.belongsTo(TestHandyman);
TestHandyman.hasMany(Professional);

module.exports = {
  Professional,
  TestCleaning,
  TestHandyman,
  Admin,
};
