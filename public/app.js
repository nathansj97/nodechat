angular.module('nodechat', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider){
            $locationProvider.html5Mode(true);
            $routeProvider.
                when('/login', {
                    templateUrl: '/views/login.tpl.html',
                    controller: 'loginCtrl'
                });
    }]);