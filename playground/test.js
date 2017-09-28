var request = require('request');



var latitude = '40.692702'
var gratitude = '-73.802836';
//var encoded = decodeURIComponent(address);
request({ // method that handel http requests to APIs 

    url: `https://api.darksky.net/forecast/90ed774613b6cd56ad3b3078a7350af6/${latitude},${gratitude}`, // getting the encoded address 
    json: true
}, (error, Response, body) => {



    //console.log(body);
    // console.log(url);
    console.log(`latitude : ${latitude}`);
    console.log(`gratitude : ${gratitude}`);
    console.log(body.currently.temperature);
    // console.log(body.currently.pressure);




})