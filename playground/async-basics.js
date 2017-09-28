console.log('starting async!');
var a = 1;
// this is called a callback function which gets excuted after the main() is finished. 
// no matter how second it is reqested to wait , call back functions always gets excuted after the main. 
setTimeout(() => {
    a = 2;

    console.log('inside' + a);
}, 0)



console.log('outside' + a);
console.log('the end');