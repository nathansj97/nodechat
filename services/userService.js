var _userStore = {};

var addUser = function (user) {
    // Add a user to the user store.

    var username = user.username;
    if (!userExists(username)) {
        _userStore[username] = user;
    } else {
        throw { name: 'DuplicateUsernameError', message: 'Username already exists.' }
    }
};

var getAllUsers = function () {
    // Return all users from the user store.

    return _userStore;
}

var attachSocket = function(username, socketId){
    // Add the user's socket id to the user store.

    if (userExists(username)){
        _userStore[username].socketId = socketId;
    } else {
        throw { name: 'UserNotFoundError', message: 'Username doesn\'t exist.' }
    }
};

var findSocketByUsername = function(username){
    // Find a user's socket id.

    if (userExists(username)){
        return _userStore[username].socketId;
    } else {
        throw { name: 'UserNotFoundError', message: 'Username doesn\'t exist.' }
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
    addUser: addUser,
    getAllUsers: getAllUsers,
    attachSocket: attachSocket,
    findSocketByUsername: findSocketByUsername
};