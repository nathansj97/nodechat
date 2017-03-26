angular.module('nodechat')
    .service('sessionService', function(){
        // Service responsible for holding session data.

        var self = this;

        _key = localStorage.getItem('userKey');
        _currentUser = {};

        self.setCurrentUser = function(user){
            // Set current user.

            _currentUser = user;
        };

        self.getCurrentUser = function(){
            // Get current user.
            
            return _currentUser;
        };

        self.setKey = function(key){
            // Set the session key.

            _key = key;
        };

        self.getKey = function(){
            // Get the session key.

            return _key;
        };

    });