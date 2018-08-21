const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017/TodoApp';
// Database Name
const dbName = 'TodoApp';
MongoClient.connect(url, (err, client) => {
    if (err) {
        assert.equal(null, err);
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server');

    const db = client.db(dbName);

    // db.collection('Todos').insertOne({
    //     text:"something to do",
    //     completed:false
    // },(err,result)=>{
    //     if(err){
    //         return console.log(" Unable to insert todo ",err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // })


    // Insert a single document
    // db.collection('Users').insertOne({
    //     name: "Ivan",
    //     age: 41,
    //     location: 'Sofia'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log(" Unable to insert user ", err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //     console.log(result.ops[0]._id.getTimestamp());
    // })

    client.close();
})