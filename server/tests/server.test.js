const expect = require('expect');
const request = require('supertest');
let { ObjectID } = require('mongodb');

const { app } = require('./../server');
const { Todo } = require('./../models/todo.js');

const todos = [
    {
        _id: new ObjectID(),
        text: "First todo"
    },
    {
        _id: new ObjectID(),
        text: "Second test todo"
    }
];
beforeEach((done) => {
    Todo.remove({})
        .then(() => {
            return Todo.insertMany(todos);
        })
        .then(() => done());
});

describe('POST/todo', () => {
    it('should create new todo', (done) => {
        let text = 'Test todo text';
        request(app)
            .post('/todos')
            .send({ text })
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                Todo.find({ text })
                    .then((todos) => {
                        expect(todos.length).toBe(1);
                        expect(todos[0].text).toBe(text);
                        done();
                    })
                    .catch((e) => done(e));
            })
    });
    it('should not create todo with invalid data', (done) => {
        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                Todo.find()
                    .then((todos) => {
                        expect(todos.length).toBe(2);
                        // expect(todos[0].text).toBe(text);
                        done();
                    })
                    .catch((e) => done(e));
            });
    });
});
describe('GET/todos route', () => {
    it('should get all todos', (done) => {
        request(app)
            .get('/todos')
            .expect(200)
            .expect((res) => {
                //console.log(res.body);
                expect(res.body.todo.length).toBe(2);
            })
            .end(done);
    });
});

describe('GET/todos/:id', () => {
    it('should return todo doc', (done) => {
        request(app)
            .get(`/todos/${todos[0]._id.toHexString()}`)
            .expect(200)
            .expect((res) => {
                expect(res.body.todo.text).toBe(todos[0].text);
            })
            .end(done);
    });

    it('should return 404 if todo not found', (done) => {
        let id = new ObjectID();
        request(app)
            .get(`/todos/${id.toHexString()}`)
            .expect(404)
            .end(done)
    });
    it('should return 404 for non object id', (done) => {
        let id = 123;
        request(app)
            .get(`/todos/${id}`)
            .expect(404)
            .end(done)
    });

});

describe('DELETE/todo/id', () => {
    it('should remove a tod', (done) => {
        let hexId = todos[1]._id.toHexString();
        request(app)
            .delete(`/todos/${hexId}`)
            .expect(200)
            .expect((res) => {
                expect(res.body.todo._id).toBe(hexId);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                // console.log(res);
                Todo.findById({ _id: hexId })
                    .then((todo) => {
                        expect(todo).toNotExist;
                        done();
                    })
                    .catch((e) => done(e));
                //    done();
            })
    });
    it('should return 404 if id not found', (done) => {
        let id = new ObjectID();
        request(app)
            .delete(`/todos/${id.toHexString()}`)
            .expect(404)
            .end(done)
    });
    it('should return 404 if id is not valid', (done) => {
        let id = 123;
        request(app)
            .get(`/todos/${id}`)
            .expect(404)
            .end(done)
    });
});