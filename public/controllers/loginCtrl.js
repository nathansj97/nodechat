angular.module('nodechat')
    .controller('loginCtrl', function($rootScope, apiService){
        var self = this;

        self.user = {
            username: '',
            gender: '',
        };

        self.login = function(){
            apiService.addUser(self.user)
                .then(function(data, status, headers, config){
                    console.log(headers);
                })
        };
});