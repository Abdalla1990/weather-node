const yargs = require('yargs');
const axios = require('axios');
const argv = yargs.
options({
        a: { // the fied a 
            demand: true, // required field 
            describe: 'enter your address ', // will be displayed in the help command 
            alias: 'address', // alies of a 
            string: true // will transfer the inserted text into string data type 
        }
    }).help() // needed to provide guidance 
    .alias('help', 'h') // alies for help 
    .argv;


var encodedAddress = encodeURIComponent(argv.address);
var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(url).then((response) => {

    if (response.data.status === 'ZERO_RESULTS') { throw new Error('Unable to find that address. ') }
    console.log(`================================`);
    console.log(`address      :  ${response.data.results[0].formatted_address}`);
    console.log(`latitude     :  ${response.data.results[0].geometry.location.lat}`);
    console.log(`langtitude   :  ${response.data.results[0].geometry.location.lng}`);

    var url2 = `https://api.darksky.net/forecast/90ed774613b6cd56ad3b3078a7350af6/${response.data.results[0].geometry.location.lat},${response.data.results[0].geometry.location.lng}`; // getting the encoded address 


    return axios.get(url2);


}).then((response1) => {

    console.log(`it is now ${response1.data.currently.temperature} and it feels like ${response1.data.currently.apparentTemperature}`);
    console.log(`================================`);


}).catch((error) => {

    if (error.code === 'ENOTFOUND')
        console.log(`unable to coonect to API ${error.code}`);
    else
        console.log(`there is an error ${error.message}`);
});