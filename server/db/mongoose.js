const mongoose = require('mongoose');

//wich promise library we use ES6
mongoose.Promise = global.Promise;

// Connection URL
let db = {
    localhost: 'mongodb://localhost:27017/TodoApp',
    mongodb: "ivan.mitkov:Ivan749343@ds125372.mlab.com:25372/node_complete"
};


mongoose.connect(db.localhost || db.mongodb, { useNewUrlParser: true });

module.exports = { mongoose };