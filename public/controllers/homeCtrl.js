angular.module('nodechat')
    .controller('homeCtrl', function($location, chatService, sessionService){
        var self = this;
        
        self.recipient = '';
        self.message = '';
        self.users = {};
        self.currentUser = sessionService.getCurrentUser();

        chatService.getAllUsers()
            .then(function(data){
                // Set the user list. Current user should not be included.

                var users = data.data.users;
                delete users[self.currentUser.username];
                self.users = users;
            });

        self.startChat = function(user){
            // Start a chat with a given user.
            
            $location.path('/chat/' + user.username);
        };

        self.userCount = function(){
            // Returns the number of online users.
            
            return Object.keys(self.users).length;
        }
});