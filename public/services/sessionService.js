angular.module('nodechat')
    .service('sessionService', function() {
        // Service responsible for holding session data.

        var self = this;

        _currentUser = {};

        self.setCurrentUser = function (user) {
            // Set current user.

            _currentUser = user;
        };

        self.getCurrentUser = function () {
            // Get current user.
            
            return _currentUser;
        };

    });