angular.module('nodechat', ['ngRoute', 'luegg.directives'])
    .config(['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider){
            $locationProvider.html5Mode(true);
            $routeProvider.
                when('/home', {
                    templateUrl: '/views/partial/home.tpl.html',
                    controller: 'homeCtrl',
                    controllerAs: 'ctrl',
                    css: '/views/css/home.css'
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
                    controllerAs: 'ctrl',
                    css: '/views/css/chat.css'
                }).
                when('/inbox', {
                    templateUrl: '/views/partial/inbox.tpl.html',
                    controller: 'inboxCtrl',
                    controllerAs: 'ctrl',
                    css: '/views/css/inbox.css'
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