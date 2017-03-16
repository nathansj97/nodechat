angular.module('nodechat')
    .service('apiService', function($http, $rootScope){
        var self = this;

        BASE_URL = 'http://localhost:3000/api';

        self.addUser = function(user){
            return $http({
                method: 'POST',
                url: BASE_URL + '/users/add',
                data: JSON.stringify(user),
                headers: { 'Content-Type': 'application/json' }
            }).then(function(data, status, headers, config){
                console.log(data)
                if (status == '200'){
                    $rootScope.success = true;
                }
            });
    }});