const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const {ObjectId} =require('mongodb');

// Todo.remove({}).then((result)=>{
//     console.log(result);
// })

// Todo.findOneAndRemove({_id:'dhjhj'}).then((res)=>console.log(res));

// Todo.deleteOne({_id:'dhjhj'}).then((res)=>console.log(res));