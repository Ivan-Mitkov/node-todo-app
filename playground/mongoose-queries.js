const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const {ObjectId} =require('mongodb');

let id = "5b7cf0952c9c47237432a967";

if(!ObgectId.isValid(id)){
    console.log(`Id ${id} is not valid`);
}


Todo.find({
    _id: id
}).then((todos) => {
    console.log(todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log(todo);
});

Todo.findById(id)
    .then((todo) => {
        if(!todo){
            console.log('Id not found');
        }
        console.log(todo);
    })
    .catch((e)=>{
        throw(e);
    });
