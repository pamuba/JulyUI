//1. Create a module
var myApp = angular
  .module("myModule", ['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider
    .when('/first-msg', {
        // template:'<b>This is the first message</b>'
        templateUrl:'msg1.html',
        controller:'message1'
    })
    .when('/second-msg', {
        template:'<b>This is the second message</b>'
    })
    .when('/third-msg', {
        // redirectTo:'/second-msg'
        redirectTo: function(){
            alert('Redirecting');
            return '/second-msg'
        }
    })
    .when('/', {
        template:'<b>Home message</b>'
    })
    .otherwise({
        template:'<b>Plz use the links above</b>'
    })
});

myApp.controller('message1', function($scope){
    $scope.a = 10;
    $scope.b = 20;
})

// myApp.config(['$routeProvide', function($routeProvide){

// }])