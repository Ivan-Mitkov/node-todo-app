const mongoose = require('mongoose');

//wich promise library we use ES6
mongoose.Promise = global.Promise;

// Connection URL
const url = 'mongodb://localhost:27017/TodoApp';

mongoose.connect(url);

//create mongoose model so that mongoose know how to store our data
let Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

//create new instance of the model
// let newTodo = new Todo({ text: '  Learn to Spanish   ' });

// //saving the new Todo
// newTodo.save()
//     .then((doc) => {
//         console.log("Save Todo ", doc);
//     }).catch((e) => {
//         console.log('Unable to save Todo ', e);
//     });

// let otherTodo = new Todo({
//     text: 'Learn MERN stack',
//     completed: true,
//     completedAt: 12345
// })

// otherTodo.save()
//     .then((doc) => {
//         console.log("Saved ", doc);
//     })
//     .catch((e) => {
//         console.log(e);
//     });

let User = mongoose.model('User', {
    email: {
        type: String,
        minLength: 5,
        trim: true,
        required: true
    }
});

// let newUser = new User({
//     email: 'As@k.com'
// });

// newUser.save()
//     .then((doc) => {
//         console.log(doc);
//     }).catch((e) => {
//         console.log(e);
//     })

// let checkUser = new User({ email: '' });
// checkUser.save()
//     .then((doc) => {
//         console.log(doc);
//     }).catch((e) => {
//         console.log(e);
//     });
