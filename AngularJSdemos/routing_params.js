//1. Create a module
var myApp = angular
  .module("myModule", ['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider
    .when('/sumurl/:a/:b', {
        templateUrl: 'sumurl.html',
        controller: 'sumurl'
    })
    .when('/suminput', {
        templateUrl: 'suminput.html',
        controller: 'suminput'
    })
    .when('/', {
        template:'<b>Welcome to the app</b>'
    })
    .otherwise({
        template:'<b>Plz use the links above</b>'
    })
});

myApp.controller('sumurl', function($scope, $routeParams){
    $scope.a = $routeParams.a;
    $scope.b = $routeParams.b;
})


myApp.controller('suminput', function($scope, $location, $interpolate){
    $scope.a = 0;
    $scope.b = 0;

    $scope.doSum = function(){
        //for evaluating the complete path
        var url = $interpolate('/sumurl/{{a}}/{{b}}')($scope);
        //Routing in code
        $location.path(url)
    }
})