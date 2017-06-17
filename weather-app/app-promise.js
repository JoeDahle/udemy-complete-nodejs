const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

let encodedAddress = encodeURIComponent(argv.address);
let geocodeURL = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeURL).then((response) => {
  if (response.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find that address');
  }
  let lat = response.data.results[0].geometry.location.lat;
  let lng = response.data.results[0].geometry.location.lng;
  let weatherURL = `https://api.darksky.net/forecast/a4c4c896b0bf9b5fe64c48aea0c756ac/${lat},${lng}`;
  console.log(response.data.results[0].formatted_address);
  return axios.get(weatherURL);
}).then((response) => {
  let temp = response.data.currently.temperature;
  let apparentTemp = response.data.currently.apparentTemperature;
  console.log(`It's currently ${temp}. It feels like ${apparentTemp}.`);
}).catch((e) => {
  if (e.code === 'ENOTFOUND') {
    console.log('Unable to connect to API server.');
  } else {
    console.log(e.message);
  }
});
