angular.module('nodechat')
    .controller('chatCtrl', function($location, chatService){
        var self = this;
        
        self.recipient = '';
        self.message = '';

        self.sendMessage = function () {
            chatService.sendMessage(self.recipient, self.message);
        };
});