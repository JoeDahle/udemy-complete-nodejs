const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then((res) => {
//   console.log(res);
// })

// Todo.findByIdAndRemove('5942e3c9bc87dc3810e7a632').then((todo) => {
//   console.log(todo);
// })
