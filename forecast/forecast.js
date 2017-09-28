const request = require('request');
var sendForcast = (latitude, gratitude, callback) => {

    request({ // method that handel http requests to APIs 

        url: `https://api.darksky.net/forecast/90ed774613b6cd56ad3b3078a7350af6/${latitude},${gratitude}`, // getting the encoded address 
        json: true
    }, (error, Response, body) => {

        if (error) {
            callback('cannot connect to forecast servers ')
        } else if (body.error == 'The given location is invalid.') {
            callback('invalid address ! ')
        } else {
            callback(undefined, {

                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            })

        }
    })



}

module.exports = {

    sendForcast

}