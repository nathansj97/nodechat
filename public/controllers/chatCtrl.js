angular.module('nodechat')
    .controller('mainCtrl', function($location){
        var self = this;
        
        self.test = 'main controller test';

        self.redirect = function(){
            $location.path('/login');
        };
});