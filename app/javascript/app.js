var app = angular.module("app",['ngRoute']);
app.config(['$routeProvider',
    function($routeProvider) { 
        
        // Système de routage
        $routeProvider
    
        .when('/led', {
            templateUrl: 'views/led.html',
            controller: 'appCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
    }
]);