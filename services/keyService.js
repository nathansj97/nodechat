var _userKeyStore = [];

var generateGuid = function() {
    // Generate RFC4122 v4 compliant GUID.
    // Source: http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript.

   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {  
      var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);  
      return v.toString(16);  
   });  
};

var addUserKey = function(username) {
    // Add a key value pair containing a username and a key to the key store.

    _userKeyStore[_userKeyStore.length] = generateUserKey(username);
    return _userKeyStore[_userKeyStore.length -1].key;
};

var generateUserKey = function (username, key = generateGuid()) {
    // Generate a key value pair containing a username and a key.

    return {
        username: username,
        key: key
    };
};

var checkUserAuthValidity = function(username, key) {
    // Check if a given user and key match with any in the key store.

    var returnValue = false;

    _userKeyStore.forEach(function(user, index){
        if (user.username === username){
            if (user.key === key){
                returnValue = true;
            }
        }
    });

    return returnValue;
};

module.exports = {
    addUserKey: addUserKey,
    checkUserAuthValidity: checkUserAuthValidity
};