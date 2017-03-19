angular.module('nodechat', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider){
            $locationProvider.html5Mode(true);
            $routeProvider.
                when('/chat', {
                    templateUrl: '/views/partial/chat.tpl.html',
                    controller: 'chatCtrl',
                    controllerAs: 'ctrl'
                }).
                when('/', {
                    templateUrl: '/views/partial/login.tpl.html',
                    controller: 'loginCtrl',
                    controllerAs: 'ctrl'
                });
    }]);