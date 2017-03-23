angular.module('nodechat')
    .controller('inboxCtrl', function($location, chatService){
        var self = this;

        var unread = chatService.getUnreadMessages();
        
        var sortMessages = function(){
            // Sorts messages into individual logs for easy display.

            var unreadLog = {};

            angular.forEach(unread, function(message, index){
                if (unreadLog[message.sender]){
                    unreadLog[message.sender].push(message);
                } else {
                    unreadLog[message.sender] = [message];
                }
            });
            return unreadLog;
        };

        self.unreadMessages = sortMessages();

        self.startChat = function(username){
            // Start a chat with a given user.

            $location.path('/chat/' + username);
        };

        self.hasUnreadMessages = function(){
            // Check whether or not there are unread messages.
            
            return Object.keys(self.unreadMessages).length !== 0;
        };
    });