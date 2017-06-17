// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Conected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, res) => {
  //   if (err) {
  //     return console.log('Unable to insert Todo', err);
  //   }
  //
  //   console.log(JSON.stringify(res.ops, undefined, 2));
  // });

  // insert new doc into USers(name, age, location)

  // db.collection('Users').insertOne({
  //   name: 'Joe Dahle',
  //   age: 23,
  //   location: 'San Tan Valley, AZ'
  // }, (err, res) => {
  //   if (err) {
  //     console.log('Unable to inser user into Users', err);
  //   }
  //
  //   console.log(JSON.stringify(res.ops[0]._id.getTimestamp(), undefined, 2));
  // })

  db.close();
});
