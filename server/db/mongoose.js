const mongoose = require('mongoose');

//wich promise library we use ES6
mongoose.Promise = global.Promise;

// Connection URL

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

module.exports = { mongoose };