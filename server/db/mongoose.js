const mongoose = require('mongoose');

//wich promise library we use ES6
mongoose.Promise = global.Promise;

// Connection URL
const url = 'mongodb://localhost:27017/TodoApp';

mongoose.connect(url, { useNewUrlParser: true });

module.exports = { mongoose };