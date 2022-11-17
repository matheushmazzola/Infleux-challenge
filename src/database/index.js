const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://krypt:<gYWbT5NN9nAGWsHK>@cluster0.9tpbx9m.mongodb.net/node'), { useMongoClient: true };

mongoose.Promise = global.Promise;

module.exports = mongoose;