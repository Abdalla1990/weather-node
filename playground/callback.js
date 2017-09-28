var getUser = (id, callback) => {

    var user = {

        id: id,
        name: 'abdalla'


    };

    setTimeout(() => {
        callback(user);
    }, 3000);
}


getUser(33, (useraccount) => {

    console.log(useraccount);

})