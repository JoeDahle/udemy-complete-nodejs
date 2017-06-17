let asyncAdd = (a, b) => {
   return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('Must be numbers');
      }
    }, 1500)
  });
};

asyncAdd(5, 7).then((res) => {
  console.log('Result:', res);
  return asyncAdd(res, 33);
}).then((res) => {
  console.log('45', res);
}).catch((errorMessage) => {
  console.log(errorMessage);
});

// let somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve('het it worked')
//     reject('uable to fullfill promise')
//   }, 2500)
// });
//
// somePromise.then((message) => {
//   console.log('success', message);
// }, (errorMessage) => {
//   console.log('error', errorMessage);
// })
