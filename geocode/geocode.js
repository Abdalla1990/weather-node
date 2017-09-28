const request = require('request');
var getaddress = (address, callback) => {
    var encoded = decodeURIComponent(address);
    request({ // method that handel http requests to APIs 

        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`, // getting the encoded address 
        json: true
    }, (error, Response, body) => {

        if (error) {
            callback('cannot connect to google servers ')
        } else if (body.status !== 'OK') {
            callback('invalid address ! ')
        } else {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                gratitude: body.results[0].geometry.location.lng

            })

        }
    })



}

module.exports = {

    getaddress

}