angular.module('nodechat')
    .service('chatService', function(sessionService) {
        // Service responsible for handling chat functionality.

        var self = this;

        var _currentUser = sessionService.getCurrentUser();
        var socket = io.connect('', { query: 'username=' + _currentUser.username});

        self.sendMessage = function(recipient, message){
            socket.emit('newChatMessage', { from: _currentUser.username, recipient: recipient, message: message });
        }

        socket.on('newChatMessage', function(message){
            console.log(message);
        });
    });