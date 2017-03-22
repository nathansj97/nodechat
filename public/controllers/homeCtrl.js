angular.module('nodechat')
    .controller('homeCtrl', function($location, chatService){
        var self = this;
        
        self.recipient = '';
        self.message = '';
        self.users = {};

        chatService.getAllUsers()
            .then(function(data){
                self.users = data.data.users;
            });

        self.startChat = function(user){
            $location.path('/chat/' + user.username);
        };
});