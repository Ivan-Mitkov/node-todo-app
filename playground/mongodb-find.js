const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server');

    const db=client.db('TodoApp');

    // db.collection('Todos').find().toArray().then((docs)=>{
    //     console.log('Tdods');
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

     db.collection('Users')
    .find({name:'Ivan'})
    .toArray()
    .then((docs)=>{
        console.log('Users');
        console.log(JSON.stringify(docs, undefined,2))
    })
    .catch((err)=>console.log('Unable to fetch user ',err));
    client.close();
})