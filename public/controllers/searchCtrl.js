angular.module('nodechat')
    .controller('searchCtrl', function($location, chatService){
        // Controller responsible for search functionality.

        var self = this;

        self.users = {};
        self.filteredUsers = {};
        self.searchTerm = '';
        self.isSearchResults = function (){
            return Object.keys(self.filteredUsers).length !== 0;
        }

        // Get all users.
        chatService.getAllUsers()
            .then(function(data){
                self.users = data.data.users;
            });

        self.filterUsers = function(){
            // Filters users by name.
            
            self.filteredUsers = {};

            angular.forEach(self.users, function(userData, username){
                if (username.toLowerCase().indexOf(self.searchTerm.toLowerCase()) !== -1){
                    self.filteredUsers[username] = userData;
                }
            });

            if (self.searchTerm === ''){
                self.filteredUsers = {};
            };
        };

        self.startChat = function(username){
            // Start a chat with a given user.

            $location.path('/chat/' + username);
        };
    });