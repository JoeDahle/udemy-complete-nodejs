let getUser = (id, callback) => {
  let user = {
    id,
    name: 'Joe'
  };

  setTimeout(() => callback(user), 3000);
};

getUser(50, user => {
  console.log(user);
});
