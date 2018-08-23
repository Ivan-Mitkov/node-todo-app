const express = require('express');
const bodyParser = require('body-parser');
const { ObjectId } = require('mongodb');

const { mongoose } = require('./db/mongoose.js');
const { Todo } = require('./models/todo.js');
const { User } = require('./models/user.js');

const port = process.env.PORT || 3000;
let app = express();

//configure middleware 
app.use(bodyParser.json());

//set up a route passing our url and a callback. URL is important /todo is for creating 
app.post('/todos', (req, res) => {
    //for test on postman only
    // console.log(req.body);
    let todo = new Todo({
        text: req.body.text
    });
    //saving to the database
    todo.save()
        .then((doc) => {
            //send back the response
            res.send(doc);
        })
        .catch((e) => res.status(400).send(e));
});

app.get('/todos', (req, res) => {
    Todo.find()
        .then((todo) => {
            res.send({ todo })
        })
        .catch((e) => {
            res.status(400).send(e);
        });
});

app.get('/todos/:id', (req, res) => {
    let id = req.params.id;
    if (!ObjectId.isValid(id)) {
        return res.sendStatus(404);
    }
    Todo.findById(id)
        .then((todo) => {
            if (!todo) {
                return res.sendStatus(404);
            }
            res.send({ todo })
        })
        .catch((e) => {
            res.sendStatus(400).send(e);
            // console.log(e);
        });
});
app.delete('/todos/:id',(req,res)=>{
    let id = req.params.id;
    if(!ObjectId.isValid(id)){
        return res.sendStatus(404);
    }
    Todo.findByIdAndRemove(id).then((todo)=>{
        if(!todo){
            return res.sendStatus(404);
        }
        // res.sendStatus(200);
        res.send({todo});
    }).catch((e) => {
        res.sendStatus(400).send(e);
        // console.log(e);
    });
})

if (!module.parent) {
    app.listen(port, () => {
        console.log(port);
    });
}

module.exports = { app }
