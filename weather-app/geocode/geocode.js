const request = require('request');

let geocodeAddress = (address, callback) => {
  let encodedAddress = encodeURIComponent(address)

  request({
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
    json: true
  }, (error, response, body) => {
    if(error){
      callback(console.log('Unable to connect'));
    } else if (body.status === 'ZERO_RESULTS') {
      callback(console.log('No Address found'));
    } else if (body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      })
    }
  });
}

module.exports.geocodeAddress = geocodeAddress;
