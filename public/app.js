angular.module('nodechat', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider){
            $locationProvider.html5Mode(true);
            $routeProvider.
                when('/home', {
                    templateUrl: '/views/partial/home.tpl.html',
                    controller: 'homeCtrl',
                    controllerAs: 'ctrl'
                }).
                when('/', {
                    templateUrl: '/views/partial/login.tpl.html',
                    controller: 'loginCtrl',
                    controllerAs: 'ctrl'
                }).
                when('/chat/:username', {
                    templateUrl: '/views/partial/chat.tpl.html',
                    controller: 'chatCtrl',
                    controllerAs: 'ctrl'
                });
    }]);