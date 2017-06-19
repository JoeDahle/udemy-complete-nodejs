require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');

let { mongoose } = require('./db/mongoose');
let { Todo } = require('./models/todo');
let { User } = require('./models/user');
let { authenticate } = require('./middleware/authenticate');

let app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  let todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.status(200).send(doc);
  }, (e) => {
    res.status(400).send(`Error saving new Todo: ${e}`);
  })
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({ todos });
  }, (e) => {
    res.status(400).send(`Error GETing todos: ${e}`);
  })
});

app.get('/todos/:id', (req, res) => {

  if (!ObjectID.isValid(req.params.id)) {
    return res.status(404).send();
  }

  Todo.findById(req.params.id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    res.status(200).send({todo});
  }).catch((e) => res.status(400).send())
})

app.delete('/todos/:id', (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(404).send();
  }

  Todo.findByIdAndRemove(req.params.id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    return res.status(200).send({todo})
  }).catch((e) => {
    res.status(400).send();
  })
});

app.patch('/todos/:id', (req, res) => {
  let id = req.params.id;
  // Note on body/ _.pick func, the user will will be able to send any sort of
  // data back to us, pick will grab only the text, and completed properties
  // of whatever is sent to us. That way, they cannot set completedAt
  // property updates.
  let body = _.pick(req.body, ['text', 'completed']);

  if (!ObjectID.isValid(req.params.id)) {
    return res.status(404).send();
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, { $set: body }, {new: true}).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  })
});

// POST /Users
app.post('/user', (req, res) => {
  let newUserReq = _.pick(req.body, ['email', 'password']);
  let newUser = new User({
    email: newUserReq.email,
    password: newUserReq.password,
    tokens: {
      access: 'fhkdjs',
      token: 'fjdksla'
    }
  });

  newUser.save().then(() => {
    return newUser.generateAuthToken();
  }).then((token) => {
    res.header('x-auth', token).send(newUser);
  }).catch((e) => {
    res.status(400).send(`Error adding new User: ${e}`);
  })
});

app.get('/user/me', authenticate, (req, res) => {
  res.send(req.user);
});

app.post('/user/login', (req, res) => {
  let existingUser = _.pick(req.body, ['email', 'password']);

  User.findByCredentials(existingUser.email, existingUser.password).then((user) => {
    user.generateAuthToken().then((token) => {
      res.header('x-auth', token).send(user);
    });
  }).catch((e) => {
    res.status(400).send({});
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = { app };
