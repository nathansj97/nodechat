angular.module('nodechat')
    .controller('loginCtrl', function($rootScope, apiService){
        // Controller responsible for user logins.
        var self = this;

        // User model.
        self.user = {
            username: '',
            gender: '',
        };

        self.login = function(){
            // Log the user into the system and store their key in localStorage.

            apiService.addUser(self.user)
                .then(function(response){
                    if (response.status === 200 && response.data.key){
                        localStorage.setItem("userKey", response.data.key);
                    } else {
                        // Handle error
                    }
                });
        };
});