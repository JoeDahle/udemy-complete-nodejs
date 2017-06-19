const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

let password = '123abc';

// bcrypt.genSalt(10, (error, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

let hashedPassword = '$2a$10$0JVgy4m6898M5uGQfa4gJ.Z3cLxknrBQCPuJNDAwlT7ohzjiZoSgO';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});
