 const yargs = require('yargs');
 const geocode = require('./geocode/geocode.js');
 const forcast = require('./forecast/forecast.js')
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

 geocode.getaddress(argv.address).then((results) => {
     console.log('getting the lat and grat and sending it to the forcasting ...')

     console.log(`================================`);
     console.log(`address   :  ${results.address}`);
     console.log(`latitude  :  ${results.latitude}`);
     console.log(`gratitude :  ${results.gratitude}`);

     forcast.sendForcast(results.latitude, results.gratitude).then((result) => {

         console.log(`it is now ${result.temperature} and it feels like ${result.apparentTemperature}`);
         console.log(`================================`);

     }, (errorMessage) => {
         console.log(errorMessage);
     });
 });