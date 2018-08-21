const { MongoClient, ObjectId } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017/TodoApp';
// Database Name
const dbName = 'TodoApp';

MongoClient.connect(url, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server');
    const db = client.db(dbName);

    // db.collection('Todos')
    //     .findOneAndUpdate({ _id: new ObjectId("5b7b80a36fa63d10830fe637") },
    //         { $set: { completed: true } },
    //         { returnOriginal: false }
    //     )
    //     .then((result)=>{
    //         console.log(result);
    //     })
    db.collection('Users')
        .findOneAndUpdate({ _id: new ObjectId("5b7b738fec05bc1ec410bdaa") },
            {
                $set: { name: "The Flash" }, $inc: { age: 1 }
            },
            {
                returnOriginal: false
            })
        .then((result) => {
            console.log(result);
        });
    client.close();
})