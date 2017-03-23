angular.module('nodechat')
    .service('chatService', function(sessionService, apiService, $rootScope) {
        // Service responsible for handling chat functionality.

        var self = this;
        chatLogs = {};

        self.getAllUsers = function(){
            // Get all users from the api service.

            return apiService.getAllUsers();
        };

        var _currentUser = sessionService.getCurrentUser();
        var socket = io.connect('', { query: 'username=' + _currentUser.username});
        
        self.sendMessage = function(recipient, message){
            // Send a message to a given user.

            socket.emit('newChatMessage', { from: _currentUser.username, recipient: recipient, message: message });
            logMessage(_currentUser.username, recipient, message);
        };

        self.getLog = function(username){
            // Retrieve a chat log for a given user.

            if (logExists(username)){
                return chatLogs[username];
            }
        }

        socket.on('newChatMessage', function(message){
            // New message recieved.

            logMessage(message.from, _currentUser.username, message.message);
        });

        var logMessage = function(sender, recipient, message){
            // Logs a message to the chat logs.

            var logName = '';

            var log = {
                sender: sender,
                message: message
            };

            // Make sure log is created with cha partner's name.
            if(recipient === _currentUser.username){
                logName = sender;
            } else {
                logName = recipient;
            }

            if (logExists(logName)){
                chatLogs[logName]
                    .messages
                    .push(log);
            } else {
                // Log doesn't exist, create one.
                chatLogs[logName] = {
                    messages: [log]
                };
            }
        };

        var logExists = function(username){
            // Checks if a chat log exists for a conversation with a given user.

            var returnValue = false;
            if (chatLogs[username]){
                returnValue = true;
            } else {
                returnValue = false;
            }
            return returnValue;
        }
    });