//this is a practice to see how to use promise and how do I call a promise several times. 

var asyncAdd = (a, b) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('sorry u have to enter numbers ');
            }

        }, 2500);




    });
};

asyncAdd(5, 7).then((message) => {
    console.log(` result : ${message}`);
    return asyncAdd(message, 33);
}).then((total) => {
    console.log(` should be 45 : ${total}`);
    return asyncAdd(total, 55);
}).then((subtotal) => {
    console.log(` should be 100 : ${subtotal}`);
}).catch((errorMessage) => {
    console.log(errorMessage);
});