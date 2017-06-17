const request = require('request');

let getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/a4c4c896b0bf9b5fe64c48aea0c756ac/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200){
      callback(undefined, body.currently);
    } else {
      callback('Unable to Connect to weather API');
    }
  });
};

module.exports.getWeather = getWeather;

// https://api.darksky.net/forecast/a4c4c896b0bf9b5fe64c48aea0c756ac/33.1945063,-111.4514369
