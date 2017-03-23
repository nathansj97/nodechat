angular.module('nodechat')
    .controller('chatCtrl', function($routeParams, $route, chatService, sessionService){
        var self = this;

        self.currentUser = sessionService.getCurrentUser();
        self.chattingTo = $routeParams.username;
        self.newMessage = '';
        self.messageLog = chatService.getLog(self.chattingTo);
        if (self.messageLog){
            self.messages = self.messageLog.messages;
        }

        chatService.markAsRead(self.chattingTo);

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