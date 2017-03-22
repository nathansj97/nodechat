angular.module('nodechat')
    .controller('chatCtrl', function($routeParams, $scope, chatService, sessionService){
        var self = this;

        self.currentUser = sessionService.getCurrentUser();
        self.chattingTo = $routeParams.username;
        self.newMessage = '';
        self.messageLog = [];

        self.sendMessage = function(){
            chatService.sendMessage(self.chattingTo, self.newMessage);
            logMessage(self.currentUser.username, self.newMessage);
            self.newMessage = '';
        };

        self.recieveMessage = function(message){
            logMessage(message.from, message.message);
        };

        $scope.$on('newMessage', function(event, data){
            self.recieveMessage(data.message);
        });

        var logMessage = function(sender, message){
            var message = {
                sender: sender,
                message: message
            };
            self.messageLog.push(message);
        };
    });