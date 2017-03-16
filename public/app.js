angular.module('nodechat', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider){
            $locationProvider.html5Mode(true);
            $routeProvider.
                when('/chat', {
                    templateUrl: '/views/chat.html',
                    controller: 'chatCtrl'
                });
    }]);