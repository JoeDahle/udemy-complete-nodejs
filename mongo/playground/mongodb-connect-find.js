// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb')

let obj = new ObjectID();
console.log(obj);



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Conected to MongoDB server');

// db.collection('Todos').find({
//     _id: new ObjectID('59416422943b702840bcb18d')
//   }).toArray().then((docs) => {
//   console.log('Todos:');
//   console.log(JSON.stringify(docs, undefined, 2));
// }, (err) => {
//   console.log('Unable to fetch todos', err);
// })

// db.collection('Todos').find().count().then((count) => {
//   console.log(`Todos count: ${count}`);
//   console.log(JSON.stringify(count, undefined, 2));
// }, (err) => {
//   console.log('Unable to fetch todos', err);
// })

db.collection('Users').find({name: 'Joe Dahle'}).count().then((count) => {
  console.log(`Users count: ${count}`);
}, (err) => {
  console.log('Unable to fetch todos', err);
})

  db.close();
});
