angular.module('nodechat')
    .controller('startchatCtrl', function($routeParams, chatService){
        var self = this;

        self.chattingTo = $routeParams.username;
        self.message = '';

        self.sendMessage = function(){
            chatService.sendMessage(self.chattingTo, self.message);
            self.message = '';
        };
    });