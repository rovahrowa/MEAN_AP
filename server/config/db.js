var mongoose = require('mongoose');
var connection =
mongoose.connect('mongodb://danstan-ARCH/mean_db');

module.exports = connection;
