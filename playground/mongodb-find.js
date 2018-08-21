const {MongoClient,ObjectId}=require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017/TodoApp';
// Database Name
const dbName = 'TodoApp';

MongoClient.connect(url,(err,client)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server');

    const db=client.db(dbName);

    // db.collection('Todos').find().toArray().then((docs)=>{
    //     console.log('Todods');
    //     console.log(JSON.stringify(docs, undefined,2))
    // },(err)=>{
    //     console.log('Unable to fetch todos ',err);
    // });


    // db.collection('Todos')
    // .find({completed:false})
    // .toArray()
    // .then((docs)=>{
    //     console.log('Tdods');
    //     console.log(JSON.stringify(docs, undefined,2))
    // })
    // .catch((err)=>console.log('Unable to fetch todos ',err));

    // db.collection('Todos')
    // .find({completed:false})
    // .count()
    // .then((count)=>{
    //     console.log(`Tdods count:${count}`);       
    // })
    // .catch((err)=>console.log('Unable to fetch todos ',err));

    //  db.collection('Users')
    // .find({name:'Ivan'})
    // .toArray()
    // .then((docs)=>{
    //     console.log('Users');
    //     console.log(JSON.stringify(docs, undefined,2))
    // })
    // .catch((err)=>console.log('Unable to fetch user ',err));
    db.collection('Users').find({
        _id:new ObjectId("5b77f64e7fedd71db055e606")
    }).toArray()
        .then((docs)=>{
            console.log('Users');
            console.log(JSON.stringify(docs,undefined,2));
        })
        .catch((err)=>{
            console.log('Unable to fetch todos', err)
        })
    client.close();
})