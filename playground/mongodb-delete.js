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

    //delete many
    // db.collection('Todos')
    //     .deleteMany({ text: 'Eat lunch' })
    //     .then((result) => {
    //         console.log(result.deletedCount)
    //     })

    // delete one
    // db.collection('Todos')
    // .deleteOne({text:'Eat lunch'})
    // .then((result)=>{
    //     console.log(result.deletedCount);
    // })

    //find one and delete
    db.collection('Todos')
        .findOneAndDelete({ _id: new ObjectId("5b7b80a76fa63d10830fe63b") })
        .then((result) => {
            console.log(result);
        })



    client.close();
})