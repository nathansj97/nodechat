angular.module('nodechat')
    .controller('navCtrl', function($location, $route){
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

            if (self.isHome()){
                $route.reload();
            } else {
                $location.path('/home');
            }
        };

        self.navigateInbox = function(){
            // Navigate to the inbox page.

            if (self.isInbox()){
                $route.reload();
            } else {
                $location.path('/inbox');
            }
        };
    });