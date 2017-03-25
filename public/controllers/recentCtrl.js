angular.module('nodechat')
    .controller('recentCtrl', function($location, chatService){
        // Controller responsible for recent conversations.

        var self = this;

        self.logs = chatService.getAllLogs();

        self.startChat = function(username){
            // Start a chat with a given user.

            $location.path('/chat/' + username);
        };

        self.hasActiveChats = function(){
            // Check whether or not there are unread messages.
            
            return Object.keys(self.logs).length !== 0;
        };
    });