angular.module('nodechat')
    .controller('navCtrl', function($location){
        // Controller responsible for navigation.

        var self = this;

        self.isHome = function(){
            // Check if the current page is 'home'.

            return $location.path() === '/home';
        };

        self.isInbox = function(){
            // Check if the current page is 'inbox'.

            return $location.path() === '/inbox';
        };

        self.navigateHome = function(){
            // Navigate to the home page.

            $location.path('/home');
        };

        self.navigateInbox = function(){
            // Navigate to the inbox page.

            $location.path('/inbox');
        };
    });