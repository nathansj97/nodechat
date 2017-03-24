angular.module('nodechat')
    .controller('chatCtrl', function($routeParams, $route, $rootScope, $scope, chatService, sessionService){
        var self = this;

        self.currentUser = sessionService.getCurrentUser();
        self.chattingTo = $routeParams.username;
        self.newMessage = '';
        self.messageLog = chatService.getLogForUser(self.chattingTo);
        if (self.messageLog){
            self.messages = self.messageLog.messages;
        }

        chatService.markAsRead(self.chattingTo);

        self.sendMessageOnKeypress = function(event){
            // Send the message if the enter button is pressed.

            if (event.which === 13){
                self.sendMessage();
            };
        }

        self.sendMessage = function(){
            // Send a message to a given user.
            
            chatService.sendMessage(self.chattingTo, self.newMessage);
            if (!self.messageLog){
                // Temporary hack to force first message to appear.
                $route.reload();
            }
            self.newMessage = '';
        };
    });