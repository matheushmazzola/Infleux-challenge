const mongoose = require("mongoose");

mongoose.connect('mongodb://nodejs-apii.herokuapp.com/node'), { useMongoClient: true };

mongoose.Promise = global.Promise;

module.exports = mongoose;