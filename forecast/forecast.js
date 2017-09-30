const request = require('request');

var sendForcast = (latitude, gratitude) => {


    return new Promise((resolve, reject) => {

        request({
            url: `https://api.darksky.net/forecast/90ed774613b6cd56ad3b3078a7350af6/${latitude},${gratitude}`, // getting the encoded address 
            json: true

        }, (error, response, body) => {
            if (error) {
                reject('cannot connect to forecast servers ')
            } else if (response.statusCode === 400) {
                reject('invalid address ! ')
            } else if (response.statusCode === 200) {
                resolve({

                    temperature: body.currently.temperature,
                    apparentTemperature: body.currently.apparentTemperature
                });
            }


        })


    })

};



module.exports = {

    sendForcast

}