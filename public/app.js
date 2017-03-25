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
                    controllerAs: 'ctrl',
                    css: '/views/css/login.css'
                }).
                when('/chat/:username', {
                    templateUrl: '/views/partial/chat.tpl.html',
                    controller: 'chatCtrl',
                    controllerAs: 'ctrl'
                }).
                when('/inbox', {
                    templateUrl: '/views/partial/inbox.tpl.html',
                    controller: 'inboxCtrl',
                    controllerAs: 'ctrl'
                }).
                when('/recent', {
                    templateUrl: '/views/partial/recent.tpl.html',
                    controller: 'recentCtrl',
                    controllerAs: 'ctrl'
                }).
                when('/search', {
                    templateUrl: '/views/partial/search.tpl.html',
                    controller: 'searchCtrl',
                    controllerAs: 'ctrl',
                    css: '/views/css/search.css'
                });
    }]);