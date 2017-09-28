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

 //console.log(argv);


 //console.log(encoded);
 geocode.getaddress(argv.address, (errorMessage, results) => {

     if (errorMessage) {

         console.log(errorMessage);
     } else {
         console.log('getting the lat and grat and sending it to the forcasting ...')
         console.log(JSON.stringify(results, undefined, 2));



         forcast.sendForcast(results.latitude, results.latitude, (error, result) => {

             if (error) {
                 console.log(error);

             } else {

                 console.log(`it is now ${result.temperature} and it feels like ${result.apparentTemperature}`);
             }


         })

     }

 });

 //90ed774613b6cd56ad3b3078a7350af6