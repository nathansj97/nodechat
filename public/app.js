angular.module('nodechat', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider){
            $locationProvider.html5Mode(true);
            $routeProvider.
                when('/chat', {
                    // TODO - rename to home.
                    templateUrl: '/views/partial/chat.tpl.html',
                    controller: 'chatCtrl',
                    controllerAs: 'ctrl'
                }).
                when('/', {
                    templateUrl: '/views/partial/login.tpl.html',
                    controller: 'loginCtrl',
                    controllerAs: 'ctrl'
                }).
                when('/chat/:username', {
                    // TODO - rename to chat.
                    templateUrl: '/views/partial/startchat.tpl.html',
                    controller: 'startchatCtrl',
                    controllerAs: 'ctrl'
                });
    }]);