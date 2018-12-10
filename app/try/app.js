// var app = angular.module("app",['ngRoute','ngResource']);

// app.config(['$routeProvider','$locationProvider',
//     function($routeProvider,$locationProvider){
//         $routeProvider
//         .when('/', {
//             templateUrl:'views/index.html'
//         })
//         .when('/led',{
//             templateUrl:'views/led.html'
//             controller:'appCtrl'
//         })
//         .when('/devices',{
//             templateUrl:'views/devices.html',
//             controller:'appCtrl'
//         })
//         .when('/devices/:id',{
//             templateUrl:'views/device.html',
//             controller:'appCtrl'
//         })
//         .otherwise({
//             redirectTo:'/'
//         });
// }]);
var app = angular.module("app",['ngRoute']);
app.config(['$routeProvider',
    function($routeProvider) { 
        
        // Système de routage
        $routeProvider
        .when('/', {
            templateUrl: 'index.html',
            controller: 'appCtrl'
        })
        .when('/contact', {
            templateUrl: 'views/led.html',
            controller: 'appCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
    }
]);