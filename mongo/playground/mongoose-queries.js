const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// let id = '5942aa20019790083b5da772';
//
// if (!ObjectID.isValid(id)) {
//   console.log('id not valid');
// }
//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log(`Todos: ${todos}`);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log(`Todo: ${todo}`);
// });
//
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');;
//   }

//   console.log(`Todo: ${todo}`)
// }).catch((e) => console.log(e));

let id = '5941a8385f9d0dec4153a1ed';

User.findById(id).then((user) => {
  if(!user) {
    return console.log('User not found');
  }

  console.log(`User: ${user}`);
}).catch((e) => console.log(e));
