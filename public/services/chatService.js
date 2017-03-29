angular.module('nodechat')
    .service('chatService', function($location, $rootScope, sessionService, apiService) {
        // Service responsible for handling chat functionality.

        var self = this;
        var key = sessionService.getKey();
        chatLogs = {};

        // TODO - Move to session service.
        self.getAllUsers = function(){
            // Get all users from the api service.

            return apiService.getAllUsers();
        };

        var _currentUser = sessionService.getCurrentUser();
        var socket = io.connect('', { query: 'username=' + _currentUser.username + '&key=' + key});
        
        self.sendMessage = function(recipient, message){
            // Send a message to a given user.

            socket.emit('newChatMessage', { key: key, from: _currentUser.username, recipient: recipient, message: message });
            logMessage(_currentUser.username, recipient, message);
        };

        self.getLogForUser = function(username){
            // Retrieve a chat log for a given user.

            if (logExists(username)){
                return chatLogs[username];
            }
        };

        self.getAllLogs = function(){
            // Retrieve a chat log for all users.

            return chatLogs;
        }

        socket.on('newChatMessage', function(message){
            // New message recieved.

            logMessage(message.from, _currentUser.username, message.message);
            $rootScope.$broadcast('messageLogStateChanged');
        });

        socket.on('userDisconnected', function(event){
            // Remove all logs for a user when they disconnect.

            var username = event.username;
            if (chatLogs[username]){
                delete chatLogs[username];
            }
        });

        self.markAsRead = function(username){
            // Mark logs as read for a given user.

            if(logExists(username)){
                angular.forEach(chatLogs[username], function(log, index){
                    angular.forEach(log, function(message, index){
                        message.read = true;
                    });
                });
            }
            $rootScope.$broadcast('messageLogStateChanged');
        };

        self.getUnreadMessages = function(){
            // Get all unread messages.

            var unread = [];

            angular.forEach(chatLogs, function(logs, username){
                angular.forEach(logs.messages, function(message, index){
                    if (!message.read){
                        unread.push(message);
                    }
                });
            });
            return unread;
        };

        var logMessage = function(sender, recipient, message){
            // Logs a message to the chat logs.

            var logName = '';
            var read = false;
            
            // Did the current user send the message?
            if(recipient === _currentUser.username){
                // No, log as sender's username and mark as unread.
                logName = sender;
                read = false;
            } else {
                // Yes, log as recipient's username and mark as read.
                logName = recipient;
                read = true;
            }

            if ($location.path() === ('/chat/' + logName)){
                // User is on the chat page, mark as read.
                read = true;
            }

            var log = {
                sender: sender,
                message: message,
                read: read
            };

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