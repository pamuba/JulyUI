//1. Create a module
var myApp = angular.module("myModule",[]);

//3. attach the controller with the module
myApp.controller("myController",function($scope){
    $scope.message = "AngularJS Webinar"
    $scope.name = "John"
})

myApp.controller("myController1",function($scope){
    $scope.message = "AngularJS Webinar contoller 2"
    $scope.name = "John controller 2"
})

myApp.controller("myController2", function($scope){
    var employees = {
        firstName:"John",
        lastName:"Smith",
        gender:"male",
        flag: '/images/flag.jpg'
    }
    $scope.employees = employees
})