var _userStore = {};

var addUser = function (user) {
    // Add a user to the user store.

    var username = user.username;
    if (!userExists(username)) {
        _userStore[username] = user;
    } else {
        throw {name: 'DuplicateUserError', message: 'Username already exists.' }
    }
};

var userExists = function (username) {
    // Check if a user exists in the user store.

    var returnValue = false;
    if (_userStore[username]){
        returnValue = true;
    } else {
        returnValue = false;
    }

    return returnValue;
};

module.exports = {
    addUser: addUser
};