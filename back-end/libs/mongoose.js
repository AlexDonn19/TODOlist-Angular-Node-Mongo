﻿var mongoose = require('mongoose');
var config = require('../config');

var log = require('./log')(module);

mongoose.Promise = global.Promise;
mongoose.connect(config.get('mongoose:uri'));
var db = mongoose.connection;

db.on('error', function (err) {
    log.error('connection error:', err.message);
});
db.once('open', function callback () {
    log.info("Connected to DB!");
});


module.exports = mongoose;