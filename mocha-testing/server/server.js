const express = require('express');

let app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'page not found',
    name: 'Todo app v1.0'
  });
});

//  Get /users
// give users a name and age property
app.get('/users', (req, res) => {
  res.status(200).send([
    { name: 'Joe', age: 23 },
    { name: 'John', age: 25 },
    { name: 'Zoe', age: 19 }
  ])
})

app.listen(3000);

module.exports.app = app;
