const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/node'), { useMongoClient: true };

mongoose.Promise = global.Promise;

module.exports = mongoose;