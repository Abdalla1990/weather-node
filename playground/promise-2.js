var request = require('request');

var geocodeAddress = (address) => {

    return new Promise((resolve, reject) => {


        request({

            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
            json: true


        }, (error, respons, body) => {

            if (error) {
                reject(`error : ${error}`);
            } else if (body.status !== 'OK') {
                reject('invalid address ! ');
            } else {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    gratitude: body.results[0].geometry.location.lng

                });
            }


        })


    })







};


geocodeAddress('CHICAGO').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
});