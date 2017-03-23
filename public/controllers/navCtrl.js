angular.module('nodechat')
    .controller('navCtrl', function($location, $route, $rootScope, $scope, chatService){
        // Controller responsible for navbar functionality.

        var self = this;

        self.unreadMessages = 0;

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

        var reloadUnreadMessagesCount = function(){
            // Reload unread message count.

            var unread = chatService.getUnreadMessages();
            self.unreadMessages = unread.length;
        };

        $rootScope.$on('messageLogStateChanged', function(){
            // Refresh the unread message count when a new message is recieved. 
            
            $scope.$apply(function(){
                reloadUnreadMessagesCount();
            });
        });
    });