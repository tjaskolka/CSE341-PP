const dbConfig = require('../config/db.js');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.product = require('./product.js')(mongoose);
db.user = require('./User.js')(mongoose);

module.exports = db;
