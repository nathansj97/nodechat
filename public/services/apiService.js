angular.module('nodechat')
    .service('apiService', function($http){
        // Service for interacting with the API.

        var self = this;

        BASE_URL = 'http://localhost:3000/api';

        self.addUser = function(user){
            // Send a request to add a user.

            return $http({
                method: 'POST',
                url: BASE_URL + '/users/add',
                data: JSON.stringify(user),
                headers: { 'Content-Type': 'application/json' }
            });
    }});