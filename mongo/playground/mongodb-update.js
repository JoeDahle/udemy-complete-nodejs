// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb')

let obj = new ObjectID();
console.log(obj);



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Conected to MongoDB server');

  // findOneAndUpdate
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5941643b2ac39c43282539a2')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((res) => {
  //   console.log(res);
  // })

  // update name, and increment age by 1
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5941686ab3f2080a40533b43')
  }, {
    $set: { name: 'Zoe' },
    $inc: { age: 1 }
  }, {
    returnOriginal: false
  }).then((res) => {
    console.log(res);
  })

  db.close();
});
